const express = require('express');
const bcrypt = require('bcrypt');
const auth_controller = require('../controllers/auth_controller');
const { User, Freelancer } = require('../models/db_schema');

const router = express.Router();
let logger;
router.post('/login', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        // Find the user by username
        if(role == 'user')
          logger = await User.findOne({ username:username });
        else
          logger = await Freelancer.findOne({username:username});
          // Check if password is provided
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        // Check if logger.password is provided and compare passwords
        if (!logger.password) {
            console.log('logger.password is null or undefined:', logger.password);
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        
        // If user not found or incorrect password, return error
        if (!logger || !(await bcrypt.compare(password, logger.password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If authentication is successful, return user data
        // res.status(200).json({ message: 'Login successful', logger });
        const loggerString = JSON.stringify(logger);
        res.redirect(`http://localhost:8080/MainPage/${encodeURIComponent(loggerString)}`);
        // const id = logger._id;
        // res.redirect(`http://localhost:8080/MainPage/${id}/${role}`);
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
      if (typeof password !== 'string') {
        return res.status(400).json({ message: 'Password must be a string' });
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

      res.redirect("/login");
  } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = {router,logger};
