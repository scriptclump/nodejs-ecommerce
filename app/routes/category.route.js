module.exports = app => {
    const CATEGORY = require("../controllers/category.controller.js");  
    var router = require("express").Router();
  
    // Create new categories
    router.post("/", CATEGORY.create);
    router.post("/create-all", CATEGORY.createAll);
  
    // Retrieve categories
    router.get("/", CATEGORY.findAll);
    router.get("/published", CATEGORY.findAllPublished);
    router.get("/:id", CATEGORY.findOne);
  
    // Update a categories
    router.put("/:id", CATEGORY.update);
  
    // Delete a categories
    router.delete("/:id", CATEGORY.delete);
    router.delete("/", CATEGORY.deleteAll);
  
    app.use('/api/category', router);
};