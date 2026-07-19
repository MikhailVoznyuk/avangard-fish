"use server";

import { redirect } from "next/navigation";
import { deleteCurrentSession } from "@/shared/auth/sessions";

export async function logoutAction() {
    await deleteCurrentSession();
    redirect("/login")
}
