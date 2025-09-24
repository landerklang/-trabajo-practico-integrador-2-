import { Router } from "express";

import { createdComment } from "../controller/comment.controller.js";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { authAdminMiddleware } from "../middleware/authAdmin.middleware.js";
import { validator } from "../middleware/validation.midleware.js";

export const commentRoutes = Router();

commentRoutes.post(
  "/comment",
  authMiddleware,
  authAdminMiddleware,
  validator,
  createdComment
);
