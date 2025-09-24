import { Router } from "express";
import { createdArticle } from "../controller/article.controller.js";

import { validator } from "../middleware/validation.midleware.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { authAdminMiddleware } from "../middleware/authAdmin.middleware.js";

export const articleRoutes = Router();

articleRoutes.post(
  "/articles",
  authMiddleware,
  authAdminMiddleware,
  validator,
  createdArticle
);
