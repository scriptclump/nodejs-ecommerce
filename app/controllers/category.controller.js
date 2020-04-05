const db = require("../models/category.model"),
CATEGORY = db.category,
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
    const category = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save category in the database
    CATEGORY.create(category)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the CATEGORY."
        });
      });
};
/**
 * Create category in Bulk
 */
exports.createAll = (req, res) => {
  var category = req.body.category;
  // Save category in the database
  CATEGORY.bulkCreate(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the CATEGORY."
      });
    });
};
/**
 * Retrieve all categories from the database.
 */
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [OP.like]: `%${title}%` } } : null;
  
    CATEGORY.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving category."
        });
    });
};
/**
 * Find a category
 */
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.findByPk(id)
      .then(data => {
        res.send(data);
        })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving category with id=" + id
        });
    });
};
/**
 * Update a category
 */
exports.update = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Category was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update category with id=${id}. Maybe category was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating category with id=" + id
        });
    });
};
/**
 * Delete a category
 */
exports.delete = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.destroy({
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete category with id=${id}. Maybe category was not found!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Could not delete category with id=" + id
        });
    });
};
/**
 * Delete all categories
 */
exports.deleteAll = (req, res) => {
    CATEGORY.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} categories were deleted successfully!` });
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all category."
        });
    });
};

/**
 * Find all published categories
 */ 
exports.findAllPublished = (req, res) => {
    CATEGORY.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving category."
        });
    });
};