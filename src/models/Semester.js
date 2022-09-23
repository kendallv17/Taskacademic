import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Semester = sequelize.define(
  "semester",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    final_date: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
