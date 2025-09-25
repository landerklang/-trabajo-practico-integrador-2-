import { Router } from "express";
import {
  createdTag,
  deletedTags,
  getAllTags,
  getTagsByPk,
  updateTags,
} from "../controller/tag.controller.js";
import { validator } from "../middleware/validation.midleware.js";
import { authAdminMiddleware } from "../middleware/authAdmin.middleware.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import {
  createdTagsValidation,
  deletedTagsValidation,
  getTagsByPkValidation,
  updateTagsValidation,
} from "../middleware/validation/tags.validation.js";

export const tagRoutes = Router();

tagRoutes.post(
  "/tags",
  authMiddleware,
  authAdminMiddleware,
  createdTagsValidation,
  validator,
  createdTag
);

tagRoutes.get("/tags", authMiddleware, validator, getAllTags);

tagRoutes.get(
  "/tags/:id",
  authMiddleware,
  getTagsByPkValidation,
  validator,
  getTagsByPk
);

tagRoutes.put(
  "/tags/:id",
  authMiddleware,
  authAdminMiddleware,
  updateTagsValidation,
  validator,
  updateTags
);

tagRoutes.delete(
  "/tags/:id",
  authMiddleware,
  authAdminMiddleware,
  deletedTagsValidation,
  validator,
  deletedTags
);
