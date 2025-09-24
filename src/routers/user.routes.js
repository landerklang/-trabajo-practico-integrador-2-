import { Router } from "express";

import {
  deletedUser,
  getallUsers,
  getUserByPk,
  updateUser,
} from "../controller/user.controller.js";

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

UserRoutes.put(
  "/users/:id",
  authMiddleware,
  authAdminMiddleware,
  validator,
  updateUser
);

UserRoutes.delete(
  "/users/:id",
  authMiddleware,
  authAdminMiddleware,
  validator,
  deletedUser
);
