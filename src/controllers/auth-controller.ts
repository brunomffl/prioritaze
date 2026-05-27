import { Request, Response } from "express";
import { AuthService } from "@/services/auth-services";

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    };

    async register(req: Request, res: Response) {
        return res.status(200).json(await this.authService.register())
    };

};

export { AuthController }