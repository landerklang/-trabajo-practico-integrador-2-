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

export const tagRoutes = Router();

tagRoutes.post(
  "/tags",
  authMiddleware,
  authAdminMiddleware,
  validator,
  createdTag
);

tagRoutes.get("/tags", authMiddleware, validator, getAllTags);

tagRoutes.get("/tags/:id", authMiddleware, validator, getTagsByPk);

tagRoutes.put(
  "/tags/:id",
  authMiddleware,
  authAdminMiddleware,
  validator,
  updateTags
);

tagRoutes.delete(
  "/tags/:id",
  authMiddleware,
  authAdminMiddleware,
  validator,
  deletedTags
);
