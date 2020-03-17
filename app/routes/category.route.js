module.exports = app => {
    const CATEGORY = require("../controllers/category.controller.js");  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", CATEGORY.create);
    router.post("/create-all", CATEGORY.createAll);
  
    // Retrieve all Tutorials
    router.get("/", CATEGORY.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", CATEGORY.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", CATEGORY.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", CATEGORY.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", CATEGORY.delete);
  
    // Create a new Tutorial
    router.delete("/", CATEGORY.deleteAll);
  
    app.use('/api/category', router);
};