import { Router } from "express";

import { getallUsers, getUserByPk } from "../controller/user.controller.js";

import { authMiddleware } from "../middleware/auth.midleware.js";
import { validator } from "../middleware/validation.midleware.js";
import { authAdminMiddleware } from "../middleware/authAdmin.middleware.js";

export const UserRoutes = Router();

UserRoutes.get(
  "/users",
  authMiddleware,
  authAdminMiddleware,
  validator,
  getallUsers
);

UserRoutes.get(
  "/users/:id",
  authMiddleware,
  authAdminMiddleware,
  validator,
  getUserByPk
);
