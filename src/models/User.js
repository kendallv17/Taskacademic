import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Semester } from "./Semester.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    college: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Semester, {
  foreinkey: "userId",
  sourceKey: "id",
});
Semester.belongsTo(User, { foreinkey: "userId", targetId: "id" });
