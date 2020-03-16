/* jshint indent: 2 */
"use strict";
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    category_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_img: {
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
    tableName: 'categories'
  });
};
