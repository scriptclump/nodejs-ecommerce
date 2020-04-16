module.exports = app => {
    const PRODUCT = require("../controllers/product.controller.js");  
    var router = require("express").Router();
  
    // Create new categories
    router.post("/", PRODUCT.create);
    router.post("/create-all", PRODUCT.createAll);
  
    // Retrieve categories
    router.get("/", PRODUCT.findAll);
    router.get("/published", PRODUCT.findAllPublished);
    router.get("/:id", PRODUCT.findOne);
  
    // Update a categories
    router.put("/:id", PRODUCT.update);
  
    // Delete a categories
    router.delete("/:id", PRODUCT.delete);
    router.delete("/", PRODUCT.deleteAll);
  
    app.use('/api/product', router);
};