import { Router } from "express";
import { AuthController } from "@/controllers/auth-controller";
import { authSchema } from "@/schemas/authSchema";
import { validateBody } from "@/middlewares/validate-schema";

const authRoutes = Router();
const authController = new AuthController()

authRoutes.get("/register",
    validateBody(authSchema),
    authController.register.bind(authController),
);

export { authRoutes };