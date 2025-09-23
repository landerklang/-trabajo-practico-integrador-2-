import {
  getprofile,
  login,
  logout,
  register,
  updateprofile,
} from "../controller/auth.controller.js";

import express from "express";
import { authMiddleware } from "../middleware/auth.midleware.js";
import { validator } from "../middleware/validation.midleware.js";

export const authRoutes = express.Router();

authRoutes.post("/auth/register", register);

authRoutes.post("/auth/login", login);

authRoutes.get("/auth/profile", authMiddleware, validator, getprofile);

authRoutes.put("/auth/profile", authMiddleware, validator, updateprofile);

authRoutes.post("/auth/logout", authMiddleware, validator, logout);
