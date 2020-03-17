"use strict";
const EXPRESS     = require('express'), 
      APP = EXPRESS();

APP.get("/", (req, res) => {
    res.json({ message: "Welcome to E-commerce service." });
});

// routes
require('./auth.route');
require('./user.route');
require('./category.route')