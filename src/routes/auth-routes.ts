import { Router } from "express";
import { AuthController } from "@/controllers/auth-controller";

const authRoutes = Router();
const authController = new AuthController()

authRoutes.get("/register",
    authController.register.bind(authController)
);

export { authRoutes };