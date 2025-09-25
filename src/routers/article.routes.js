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
import {
  createdArticleValidation,
  deletedArticleValidation,
  getArticleByPkValidation,
  updatearticleValidation,
} from "../middleware/validation/article.validation.js";

export const articleRoutes = Router();

articleRoutes.post(
  "/articles",
  authMiddleware,
  createdArticleValidation,
  validator,
  createdArticle
);

articleRoutes.get("/articles", authMiddleware, validator, getAllArticle);

articleRoutes.get(
  "/articles/:id",
  authMiddleware,
  getArticleByPkValidation,
  validator,
  getArticleByPk
);

articleRoutes.get("/articles/:my", authMiddleware, validator, getMyArticle);

articleRoutes.put(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  updatearticleValidation,
  validator,
  updateArticle
);

articleRoutes.delete(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  deletedArticleValidation,
  validator,
  deletedArticle
);
