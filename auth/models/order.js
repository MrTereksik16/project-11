import { DataTypes } from "sequelize";
import { db } from "./connectToDb.js.js";

export const Order = db.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "orders",
  }
);