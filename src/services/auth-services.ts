import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { prisma } from "@/database/prisma";
import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";
// login schema

class AuthService {

    async register(){
        return "teste da rota de register"
    };

};

export { AuthService };