/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_group', {
    user_gr_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    tableName: 'user_group'
  });
};
