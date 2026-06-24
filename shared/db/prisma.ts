import "server-only";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("Database URL is not specified");
}

const adapter = new PrismaPg(connectionString);

export const prisma = globalForPrisma.prisma ?? new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}