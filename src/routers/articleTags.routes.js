import { Router } from "express";
import {
  deleterelacionfromarticle,
  updaterelacionfromarticle,
} from "../controller/ArticleTags.controller.js";
import { validator } from "../middleware/validation.midleware.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { ownerMiddleware } from "../middleware/authOwner.midleware.js";

export const articleTagsRoutes = Router();

articleTagsRoutes.put(
  "/article/:id/tags/:tagsid",
  authMiddleware,
  ownerMiddleware,
  validator,
  updaterelacionfromarticle
);

articleTagsRoutes.delete(
  "/article/:id/tags/:tagsid",
  authMiddleware,
  ownerMiddleware,
  validator,
  deleterelacionfromarticle
);
