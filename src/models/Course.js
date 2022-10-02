import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Course = sequelize.define(
  "courses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    professor: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Course.hasMany(Task, {
  foreinkey: "courseId",
  sourceKey: "id",
});
Task.belongsTo(Course, { foreinkey: "courseId", targetId: "id" });