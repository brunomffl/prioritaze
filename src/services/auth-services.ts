import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import { prisma } from "@/database/prisma";
import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";
import { AuthLoginSchema } from "@/schemas/authSchema";

class AuthService {

    async register(userData: AuthLoginSchema){
        const existingUser = await prisma.user.findUnique({
            where: {
                email: userData.email
            }
        });

        if (existingUser) {
            throw new AppError("E-mail já cadastrado!", 400);
        };

        const hashedPassword = await hash(userData.password, 8);

        const user = await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            }
        });

        return user;
    };

};

export { AuthService };