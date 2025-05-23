import express from "express";

import {
  getAll,
  getOne,
  create,
  edit,
  del,
  getArtByJournal,
} from "../controllers/journalistController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", del);
router.get("/:id/articles", getArtByJournal);

export default router;
