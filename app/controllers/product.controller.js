const db = require("../models/product.model"),
PRODUCT = db.product,
OP = db.Sequelize.Op;

/**
 * Create the Category
 */
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Title can not be empty!"
      });
      return;
    }
  
    // Prepare data for insert
    const product = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save product in the database
    PRODUCT.create(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the product."
        });
      });
};
/**
 * Create product in Bulk
 */
exports.createAll = (req, res) => {
  var product = req.body.product;
  // Save product in the database
  PRODUCT.bulkCreate(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};
/**
 * Retrieve all categories from the database.
 */
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [OP.like]: `%${title}%` } } : null;
  
    PRODUCT.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product."
        });
    });
};
/**
 * Find a product
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    PRODUCT.findByPk(id)
      .then(data => {
        res.send(data);
        })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving product with id=" + id
        });
    });
};
/**
 * Update a product
 */
exports.update = (req, res) => {
    const id = req.params.id;
  
    PRODUCT.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Category was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating product with id=" + id
        });
    });
};
/**
 * Delete a product
 */
exports.delete = (req, res) => {
    const id = req.params.id;
  
    PRODUCT.destroy({
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete product with id=${id}. Maybe product was not found!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Could not delete product with id=" + id
        });
    });
};
/**
 * Delete all categories
 */
exports.deleteAll = (req, res) => {
    PRODUCT.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} categories were deleted successfully!` });
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all product."
        });
    });
};

/**
 * Find all published categories
 */ 
exports.findAllPublished = (req, res) => {
    PRODUCT.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product."
        });
    });
};