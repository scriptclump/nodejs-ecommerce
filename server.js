"use strict";

// Imports the NodeJS packages
require('dotenv').config()
const   CHALK   = require('chalk'),
        FIGLET    = require('figlet'),
        EXPRESS   = require('express'),
        ENV       = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        APP       = EXPRESS(),
        CONGIF    = require('./config/config')[ENV];

// Load the MVC
require('./auto_loader');

// Starting the server
const   SERVER_PORT   = CONGIF.port || process.env.PORT,
        SERVER        = APP.listen(SERVER_PORT)
console.log(CHALK.blue.bold(FIGLET.textSync('E-commerce Boilerplate')));
console.log(CHALK.green.bold(`Server Started at port: ${SERVER_PORT}`));