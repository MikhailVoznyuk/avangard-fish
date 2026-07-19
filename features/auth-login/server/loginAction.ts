"use server"

import { redirect } from "next/navigation";

import { prisma } from "@/shared/db/prisma";
import { verifyPassword } from "@/shared/auth/password-core";
import { createSession } from "@/shared/auth/sessions";

export async function loginAction(formData: FormData) {
    const login = String(formData.get("login") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!login || !password) {
        throw new Error("Введите логин и пароль");
    }

    const user = await prisma.user.findUnique({
        where: {
            login
        }
    })

    if (!user) {
        throw new Error("Неверный логин или пароль");
    }

    const isPasswordValid = verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
        throw new Error("Неверный логин или пароль");
    }

    await createSession(user.id);

    redirect('/admin/products');
}