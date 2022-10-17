'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Semester extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Semester.belongsTo(models.User, { as: "author", foreignKey: "userId" });
      Semester.hasMany(models.Course, { as:"courses", foreignKey: "semesterId"});
    }
  }
  Semester.init({
    startDate: DataTypes.DATE,
    finalDate: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Semester',
    tableName: 'semesters'
  });
  return Semester;
};