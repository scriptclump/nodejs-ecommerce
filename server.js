"use strict";

// Imports the NodeJS packages
require('dotenv').config();
const   CHALK       = require('chalk'),
        FIGLET      = require('figlet'),
        EXPRESS     = require('express'),
        ENV         = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        APP         = EXPRESS(),
        BODY_PARSER = require("body-parser"),
        CORS        = require("cors"),
        CONGIF      = require('./app/config');

var corsOptions = {
    origin: "http://localhost:"+process.env.PORT
};
APP.use(CORS(corsOptions));

// parse requests of content-type - application/json
APP.use(BODY_PARSER.json());
// parse requests of content-type - application/x-www-form-urlencoded
APP.use(BODY_PARSER.urlencoded({ extended: true }));
          

// Load the MVC
require('./auto_loader');

// Starting the server
const   SERVER_PORT   = CONGIF.port || process.env.PORT,
        SERVER        = APP.listen(SERVER_PORT)
console.log(CHALK.blue.bold(FIGLET.textSync('Ecommerce')));
console.log(CHALK.green.bold(`Server Started at port: ${SERVER_PORT}`))