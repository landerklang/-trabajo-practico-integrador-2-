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
import {
  createdCommentValidation,
  deletedCommentValidation,
  getCommentByPkValidation,
  updateCommentValidation,
} from "../middleware/validation/comment.validation.js";

export const commentRoutes = Router();

commentRoutes.post(
  "/comment",
  authMiddleware,
  createdCommentValidation,
  validator,
  createdComment
);

commentRoutes.get("/comment", authMiddleware, validator, getMyComment);

commentRoutes.put(
  "/comment/:id",
  authMiddleware,
  updateCommentValidation,
  validator,
  updateCommet
);

commentRoutes.get(
  "/comment/article/:id",
  authMiddleware,
  getCommentByPkValidation,
  validator,
  getCommentfromarticle
);
commentRoutes.delete(
  "/comment/:id",
  authMiddleware,
  deletedCommentValidation,
  validator,
  deletedComment
);
