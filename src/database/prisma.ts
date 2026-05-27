import { PrismaClient } from "../../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

export const prisma = new PrismaClient({
	log: process.env.NODE_ENV === "production" ? [] : ["query"],
	adapter: new PrismaPg({
		connectionString: process.env.DATABASE_URL,
	}),
});