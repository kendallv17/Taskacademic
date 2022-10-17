'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Course, { as: "author", foreignKey: "courseId" });
    }
  }
  Task.init({
    description: DataTypes.STRING,
    priority: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT,
    dueDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  });
  return Task;
};