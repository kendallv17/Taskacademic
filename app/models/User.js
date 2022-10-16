'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    college:{type: DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  User.hasMany(Semester, { foreinkey: "userId", sourceKey: "id"});
  Semester.belongsTo(User, { foreinkey: "userId", targetId: "id" });

  return User;
};