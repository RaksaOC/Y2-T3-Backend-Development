import express from "express";

import {
  getAll,
  getOne,
  create,
  edit,
  del,
  getArtByCat,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", del);
router.get("/:id/articles", getArtByCat);

export default router;
