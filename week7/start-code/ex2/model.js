import { DataTypes } from "sequelize";
import dbConn from "./db.js";

const Writer = dbConn.define(
  "Writer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name is required" },
        len: { args: [2, 100], msg: "Name length must be 2-100" },
      },
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: "Year must be integer" },
        min: { args: 1000, msg: "Year after 1000" },
        max: { args: new Date().getFullYear(), msg: "Year not in future" },
      },
    },
  },
  {
    tableName: "authors",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

const Novel = dbConn.define(
  "Novel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title required" },
        len: { args: [1, 200], msg: "Title 1-200 chars" },
      },
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: "Year must be integer" },
        min: { args: 1000, msg: "Year after 1000" },
        max: { args: new Date().getFullYear() + 5, msg: "Year too far" },
      },
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: "Pages must be integer" },
        min: { args: 1, msg: "At least 1 page" },
        max: { args: 10000, msg: "Max 10,000 pages" },
      },
    },
    writer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Writer,
        key: "id",
      },
      validate: {
        notNull: { msg: "Writer required" },
        isInt: { msg: "Writer ID must be integer" },
      },
    },
  },
  {
    tableName: "books",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Writer.hasMany(Novel, { foreignKey: "writer_id" });
Novel.belongsTo(Writer, { foreignKey: "writer_id" });

export { Writer, Novel };
