/* jshint indent: 2 */
"use strict";
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_images', {
    pr_img_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_alt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort_order: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updatedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    deletedBy: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'product_images'
  });
};
