import { Router } from "express";
import {
  deleterelacionfromarticle,
  updaterelacionfromarticle,
} from "../controller/ArticleTags.controller.js";
import { validator } from "../middleware/validation.midleware.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { ownerMiddleware } from "../middleware/authOwner.midleware.js";
import { deletedArticleValidation } from "../middleware/validation/article.validation.js";
import { updateRelacionFromArticleValidation } from "../middleware/validation/articleTags.validation.js";

export const articleTagsRoutes = Router();

articleTagsRoutes.put(
  "/article/:id/tags/:tagsid",
  authMiddleware,
  ownerMiddleware,
  updateRelacionFromArticleValidation,
  validator,
  updaterelacionfromarticle
);

articleTagsRoutes.delete(
  "/article/:id/tags/:tagsid",
  authMiddleware,
  ownerMiddleware,
  deletedArticleValidation,
  validator,
  deleterelacionfromarticle
);
