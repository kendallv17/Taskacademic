import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.SMALLINT,
    },
    status: {
      type: DataTypes.SMALLINT,
    },
    due_date: {
        type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);
