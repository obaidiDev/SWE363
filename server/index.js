
const express = require('express');
const mongoose = require("../server/db");
const cors = require('cors');
const nunjucks = require('nunjucks');
const session = require('express-session');
const bodyParser= require('body-parser');
const auth_router = require('./routes/auth_router');
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

nunjucks.configure('views', {
    express: app,
    autoescape:false
});
app.set('view engine', 'njk');
app.use(express.static(path.join(__dirname,'public')));

app.use(auth_router);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`);
});