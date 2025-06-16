import { Router } from "express";
import { getArticlesByJournalist } from "../controllers/articleController.js";

const journalistRouter = Router();

// GET /api/journalists/:id/articles
journalistRouter.get("/:id/articles", getArticlesByJournalist);

export default journalistRouter;
