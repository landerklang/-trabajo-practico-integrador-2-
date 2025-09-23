import { login, register } from "../controller/auth.controller.js";

import express from "express";

export const authRoutes = express.Router();

authRoutes.post("/auth/register", register);

authRoutes.post("/auth/login", login);
