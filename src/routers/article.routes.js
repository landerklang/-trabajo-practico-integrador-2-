import { Router } from "express";
import {
  createdArticle,
  deletedArticle,
  getAllArticle,
  getArticleByPk,
  getMyArticle,
  updateArticle,
} from "../controller/article.controller.js";

import { validator } from "../middleware/validation.midleware.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { ownerMiddleware } from "../middleware/authOwner.midleware.js";

export const articleRoutes = Router();

articleRoutes.post("/articles", authMiddleware, validator, createdArticle);

articleRoutes.get("/articles", authMiddleware, validator, getAllArticle);

articleRoutes.get("/articles/:id", authMiddleware, validator, getArticleByPk);

articleRoutes.get("/articles/:my", authMiddleware, validator, getMyArticle);

articleRoutes.put(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  validator,
  updateArticle
);

articleRoutes.delete(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  validator,
  deletedArticle
);
