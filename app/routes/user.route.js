"use strict";
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller.js");

module.exports = function(app) {
  APP.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  APP.get("/api/test/all", controller.allAccess);

  APP.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  APP.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  APP.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
}