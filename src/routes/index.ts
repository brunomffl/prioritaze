import { Router } from "express";
import { authRoutes } from "./auth-routes";
//importar o ensureAuthenticated para garantir que o usuário está autenticado

const routes = Router();

routes.use("/auth",
    authRoutes
);

export { routes };