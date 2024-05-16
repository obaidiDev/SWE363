
const express = require('express');
const mongoose = require("../server/db");
const cors = require('cors');
const nunjucks = require('nunjucks');
const session = require('express-session');
const bodyParser= require('body-parser');
const authenticator = require('./routes/auth_router');
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 's3cr3t',
    resave: false, // don't save session if unmodified
    saveUninitialized: false // don't create session until something stored
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/simplyhired', authenticator.router);

app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`);
});

module.exports = authenticator.logger;