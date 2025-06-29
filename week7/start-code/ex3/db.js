import { Sequelize as SQL } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new SQL({
  dialect: "mysql", // or 'postgres', 'sqlite', etc.
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default db;
