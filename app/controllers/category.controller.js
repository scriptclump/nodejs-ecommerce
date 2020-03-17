const db = require("../models/category.model"),
CATEGORY = db.category,
OP = db.Sequelize.Op;

// Create and Save a new CATEGORY
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Title can not be empty!"
      });
      return;
    }
  
    // Create a CATEGORY
    const category = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save CATEGORY in the database
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
// Create CATEGORY in Bulk
exports.createAll = (req, res) => {
  var category = req.body.category;
  // Save CATEGORY in the database
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

// Retrieve all CATEGORYs from the database.
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

// Find a single CATEGORY with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.findByPk(id)
      .then(data => {
        res.send(data);
        })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving CATEGORY with id=" + id
        });
    });
};

// Update a CATEGORY by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.update(req.body, {
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "CATEGORY was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update CATEGORY with id=${id}. Maybe CATEGORY was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating CATEGORY with id=" + id
        });
    });
};

// Delete a CATEGORY with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    CATEGORY.destroy({
      where: { id: id }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "CATEGORY was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete CATEGORY with id=${id}. Maybe CATEGORY was not found!`
          });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: "Could not delete CATEGORY with id=" + id
        });
    });
};

// Delete all CATEGORYs from the database.
exports.deleteAll = (req, res) => {
    CATEGORY.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} CATEGORYs were deleted successfully!` });
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all category."
        });
    });
};

// Find all published CATEGORYs
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