import { DataTypes } from "sequelize";
import db from "./db.js";

// Pupil model
export const Pupil = db.define("Pupil", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name required" },
      len: { args: [2, 100], msg: "Name 2-100 chars" },
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "Age must be int" },
      min: { args: 1, msg: "Min age 1" },
      max: { args: 120, msg: "Max age 120" },
    },
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "Group must be int" },
      min: { args: 1, msg: "Min group 1" },
      max: { args: 12, msg: "Max group 12" },
    },
  },
});

// Group model
export const Group = db.define("Group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Group name required" },
      len: { args: [2, 50], msg: "Group name 2-50 chars" },
    },
  },
});

// Presence model
export const Presence = db.define(
  "Presence",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: { msg: "Date invalid" },
        isAfter: {
          args: new Date(
            new Date().setFullYear(new Date().getFullYear() - 1)
          ).toISOString(),
          msg: "Date must be recent",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("present", "absent", "late"),
      allowNull: false,
      validate: {
        isIn: { args: [["present", "absent", "late"]], msg: "Invalid status" },
      },
    },
    pupil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Pupil, key: "id" },
      validate: { notEmpty: { msg: "Pupil required" } },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Group, key: "id" },
      validate: { notEmpty: { msg: "Group required" } },
    },
  },
  { timestamps: false }
);

// Set up associations
Pupil.hasMany(Presence, { foreignKey: "pupil_id", onDelete: "CASCADE" });
Group.hasMany(Presence, { foreignKey: "group_id", onDelete: "CASCADE" });
Presence.belongsTo(Pupil, { foreignKey: "pupil_id" });
Presence.belongsTo(Group, { foreignKey: "group_id" });
Pupil.belongsTo(Group, { foreignKey: "group_id", onDelete: "SET NULL" });
Group.hasMany(Pupil, { foreignKey: "group_id", onDelete: "SET NULL" });
