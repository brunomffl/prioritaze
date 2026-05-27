import { Request, Response } from "express";
import { AuthService } from "@/services/auth-services";

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    };

    async register(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        return res.status(200).json(await this.authService.register(user));
    };

};

export { AuthController }