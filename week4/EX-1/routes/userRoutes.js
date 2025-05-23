import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/userController.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

// GET /users - List all users
router.get("/users", getAllUsers);
// GET /users/:id - Get one user
router.get("/users/:id", getUserById);
// POST /users - Create new user
router.post("/users", validate, createUser);
// PUT /users/:id - Update user
router.put("/users/:id", validate, editUser);
// DELETE /users/:id - Delete user
router.delete("/users/:id", deleteUser);

export default router;
