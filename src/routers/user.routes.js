import { Router } from "express";

import { getallUsers } from "../controller/user.controller.js";

import { authMiddleware } from "../middleware/auth.midleware.js";
import { authAdminMiddleware } from "../middleware/authadmin.midleware.js";
import { validator } from "../middleware/validation.midleware.js";

export const UserRoutes = Router();

UserRoutes.get(
  "/users",
  authMiddleware,
  authAdminMiddleware,
  validator,
  getallUsers
);
