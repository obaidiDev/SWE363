const express = require('express');
const bcrypt = require('bcrypt');
const auth_controller = require('../controllers/auth_controller');
const { User, Freelancer } = require('../models/db_schema');

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Find the user by username
        let logger;
        if(role == 'user')
          logger = await User.findOne({ username:username });
        else
          logger = await Freelancer.findOne({username:username});

        // If user not found or incorrect password, return error
        if (!logger || !(await bcrypt.compare(password, logger.password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If authentication is successful, return user data
        res.status(200).json({ message: 'Login successful', logger });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.post('/register', async (req, res) => {
  try {
      const { firstName, lastName, email, username, password, role } = req.body;

      let exist = true;
      // Check if the username or email already exists
      if(role == "user")
        exist = await User.findOne({ $or: [{ username }, { email }] });
      else
        exist = await Freelancer.findOne({ $or: [{ username }, { email }] });

      if (exist) {
          return res.status(400).json({ message: 'Username or email already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
          username:username,
          email:email,
          password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
