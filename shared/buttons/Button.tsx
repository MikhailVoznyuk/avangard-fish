import {type ReactNode} from 'react';
import {type ClassValue} from "clsx";
import {cn} from "@/shared/utils/cn";

type Props = {
    handler: () => void;
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: string;
}

export function Button({handler, variant="secondary", children, className}: Props) {
    const base: ClassValue = "flex items-center justify-center rounded-full text-2xl font-medium";
    const optional = variant === "primary" ? "bg-primary uppercase" : "bg-secondary";

    return (
        <button
            type="button"
            onClick={handler}
            className={cn("", base, optional, className)}
        >
            {children}
        </button>
    )

}