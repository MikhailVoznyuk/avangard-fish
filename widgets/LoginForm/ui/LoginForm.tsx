import Image from "next/image";
import { loginAction } from "@/features/auth-login";
import { Button } from "@/shared/ui/buttons/Button";

export function LoginForm() {
    return (
        <form action={loginAction} className="flex flex-col gap-6 w-xs p-6 bg-white border border-black/10 rounded-xl shadow-lg items-center">
            <div className="flex flex-col gap-2 items-center">
                <Image src={"/logo.svg"} width={256} height={256} className="w-32" alt="logo"/>
                <h1 className="text-2xl text-primary font-semibold">Вход в админ-панель</h1>
            </div>

            <div className="w-full flex flex-col gap-4 items-center">
                <input name="login" placeholder="Логин" className="w-full border border-black/20 rounded-full shadow-md px-4 py-1"/>
                <input name="password" placeholder="Пароль" className="w-full border border-black/20 rounded-full shadow-md px-4 py-1" />
            </div>

            <Button className={"w-32"} variant={"secondary"} type="submit">Войти</Button>
        </form>
    )
}