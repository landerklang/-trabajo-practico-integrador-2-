import { Router } from "express";
import { authRoutes } from "./auth.routes.js";
import { UserRoutes } from "./user.routes.js";
import { articleRoutes } from "./article.routes.js";
import { commentRoutes } from "./comment.routes.js";

export const router = Router();

router.use(authRoutes);

router.use(UserRoutes);

router.use(articleRoutes);

router.use(commentRoutes);
