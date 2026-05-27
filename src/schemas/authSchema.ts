import { z } from "zod";

export const authSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/, { error: "Senha deve conter uma letra maiúscula, uma letra minúscula e um caractere especial!" }),
});

export interface TokenPayLoad {
    sub: string,
    role: string
}

export type AuthLoginSchema = z.infer<typeof authSchema>;