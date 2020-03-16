"use strict";

// Imports the NodeJS packages
require('dotenv').config()
const   CHALK   = require('chalk'),
        FIGLET    = require('figlet'),
        EXPRESS   = require('express'),
        ENV       = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        APP       = EXPRESS(),
        CONGIF    = require('./app/config');

var corsOptions = {
    origin: "http://localhost:"+process.env.PORT;
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
          

// Load the MVC
require('./auto_loader');

// Starting the server
const   SERVER_PORT   = CONGIF.port || process.env.PORT,
        SERVER        = APP.listen(SERVER_PORT)
console.log(CHALK.blue.bold(FIGLET.textSync('E-commerce')));
console.log(CHALK.green.bold(`Server Started at port: ${SERVER_PORT}`));