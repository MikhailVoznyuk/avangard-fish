import {type ReactNode} from 'react';
import {type ClassValue} from "clsx";
import {cn} from "@/shared/utils/cn";

type Props = {
    type?: "button" | "submit";
    handler?: () => void;
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: ClassValue;
}

export function Button({type="button", handler, variant="secondary", children, className}: Props) {
    const base: ClassValue = "flex items-center justify-center rounded-full text-xl font-medium cursor-pointer text-white transition-colors duration-300";
    const optional: ClassValue = variant === "primary" ? "bg-primary uppercase px-3 py-2 hover:bg-secondary" : "bg-secondary px-2 py-1 hover:bg-primary";

    return (
        <button
            type={type}
            onClick={(type === "button") ? handler : undefined}
            className={cn("", base, optional, className)}
        >
            {children}
        </button>
    )

}