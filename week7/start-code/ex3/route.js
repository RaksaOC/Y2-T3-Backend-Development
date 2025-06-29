import express from "express";
import {
  recordPresence,
  fetchPresence,
  fetchGroupPresence,
  fetchPupilPresenceSummary,
} from "./query.js";

const router = express.Router();

// POST /presence?pupil_id=1&group_id=1&date=2025-06-17&status=present
router.post("/presence", async (req, res) => {
  try {
    const { pupil_id, group_id, date, status } = req.query;
    const rec = await recordPresence({
      pupil_id: parseInt(pupil_id),
      group_id: parseInt(group_id),
      date,
      status,
    });
    res.status(201).json(rec);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// GET /presence?pupil_id=1&date=2025-06-17
router.get("/presence", async (req, res) => {
  try {
    const { pupil_id, date } = req.query;
    const rec = await fetchPresence({
      pupil_id: parseInt(pupil_id),
      date,
    });
    if (!rec) return res.status(404).json({ error: "Not found" });
    res.json(rec);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /groups/:id/presence
router.get("/groups/:id/presence", async (req, res) => {
  try {
    const records = await fetchGroupPresence(req.params.id);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /pupils/:id/presence
router.get("/pupils/:id/presence", async (req, res) => {
  try {
    const records = await fetchPupilPresenceSummary(req.params.id);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
