import express from "express";
import {
  getAll,
  getOne,
  create,
  edit,
  del,
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", del);

export default router;
