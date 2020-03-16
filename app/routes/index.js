"use strict";
const EXPRESS     = require('express'), 
      APP = EXPRESS();

APP.get("/", (req, res) => {
    res.json({ message: "Welcome to E-commerce service." });
});

// routes
require('./auth.route')(app);
require('./user.route')(app);