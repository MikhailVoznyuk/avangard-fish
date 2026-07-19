import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { getCurrentUser } from "@/shared/auth/sessions";
import { logoutAction } from "@/features/auth-logout/server/logoutAction";
import { Button } from "@/shared/ui/buttons/Button";
import { Header } from "@/shared/ui/text/Header";

export default async function adminLayout({ children }: {children: ReactNode}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="w-screen">
            <div className="flex flex-col gap-2 p-6">
                <Header as="h1" variant="secondary"  size="xl" className="text-primary">Админ панель</Header>
                <span>{`Пользователь: ${user.login}`}</span>
                <form action={logoutAction}>
                    <Button variant="secondary" className="text-md" type="submit">Выйти</Button>
                </form>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}