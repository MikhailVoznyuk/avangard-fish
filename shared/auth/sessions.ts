import "server-only";

import { cookies } from "next/headers";
import { createHash, randomBytes } from "node:crypto";

import { prisma } from "@/shared/db/prisma";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_TTL_DATES = 7;

function hashToken(token: string) {
    return createHash("sha256").update(token).digest("hex");
}

function getExpiresAt() {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + SESSION_TTL_DATES);
    return expiresAt;
}

export async function createSession(userId: string) {
    const token = randomBytes(32).toString("base64");
    const tokenHash = hashToken(token);
    const expiresAt = getExpiresAt();

    await prisma.session.create({
        data: {
            tokenHash,
            userId,
            expiresAt
        }
    })

    const cookieStore = await cookies();

    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: expiresAt,
    });
}

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
        return null;
    }

    const tokenHash = hashToken(token);

    const session = await prisma.session.findUnique({
        where: {
            tokenHash
        },
        include: {
            user: true
        }
    })

    if (!session) {
        return null;
    }

    if (session.expiresAt < new Date()) {
        await prisma.session.delete({
            where: {
                id: session.id
            }
        })

        return null;
    }

    return session.user;
}

export async function deleteCurrentSession() {
    const cookieStore = await cookies();

    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (token) {
        const tokenHash = hashToken(token);
        await prisma.session.delete({
            where: {
                tokenHash
            }
        })
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}