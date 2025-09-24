import { Router } from "express";

import {
  createdComment,
  deletedComment,
  getCommentfromarticle,
  getMyComment,
  updateCommet,
} from "../controller/comment.controller.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { authAdminMiddleware } from "../middleware/authAdmin.middleware.js";
import { validator } from "../middleware/validation.midleware.js";

export const commentRoutes = Router();

commentRoutes.post("/comment", authMiddleware, validator, createdComment);

commentRoutes.get("/comment", authMiddleware, validator, getMyComment);

commentRoutes.put("/comment/:id", authMiddleware, validator, updateCommet);

commentRoutes.get(
  "/comment/article/:id",
  authMiddleware,
  validator,
  getCommentfromarticle
);
commentRoutes.delete("/comment/:id", authMiddleware, validator, deletedComment);
