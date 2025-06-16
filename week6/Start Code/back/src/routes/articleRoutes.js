import { Router } from "express";
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleWithJournalist,
  getArticlesByJournalist,
} from "../controllers/articleController.js";

const articleRouter = Router();
articleRouter.get("/", getAllArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.post("/", createArticle);
articleRouter.put("/:id", updateArticle);
articleRouter.delete("/:id", deleteArticle);
articleRouter.get("/with-journalist/:id", getArticleWithJournalist);

export default articleRouter;
