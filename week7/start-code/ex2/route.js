import express from "express";
import {
  fetchNovelsByWriter,
  addNovelToWriter,
  getAllWritersWithNovels,
} from "./query.js";

const router = express.Router();

// GET /writers/:name/novels - get all novels by a writer
router.get(":name/novels", async (req, res) => {
  try {
    const novels = await fetchNovelsByWriter(req.params.name);
    res.json(novels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /writers/:name/novels - add a novel for a writer
router.post(":name/novels", async (req, res) => {
  try {
    const novel = await addNovelToWriter(req.params.name, req.body);
    res.status(201).json(novel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /writers/all - list all writers with their novels
router.get("/all", async (req, res) => {
  try {
    const writers = await getAllWritersWithNovels();
    res.json(writers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
