'use strict';
import { Task } from "Task";
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    name: DataTypes.STRING,
    professor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });

  Course.hasMany(Task, { foreinkey: "courseId", sourceKey: "id",});
  Task.belongsTo(Course, { foreinkey: "courseId", targetId: "id" });
  
  return Course;
};