import Link from "next/link";
import type { ReactNode } from "react";
import type { ClassValue } from "clsx";
import { cn } from "@/shared/utils/cn";

type Props = {
    href: string;
    variant?: 'primary' | 'secondary';
    children: ReactNode;
    uppercase?: boolean;
    className?: ClassValue;
}

export function ButtonLink({href, variant, uppercase, className, children}: Props) {
    const base: ClassValue = "flex items-center justify-center rounded-full text-xl font-medium cursor-pointer text-white transition-colors duration-300";
    const optional: ClassValue = variant === "primary" ? "bg-primary px-3 py-2 hover:bg-secondary" : "bg-secondary px-2 py-1 hover:bg-primary";

    return (
        <Link href={href} className={cn(base, optional, className, (uppercase || (variant === "primary" && uppercase !== false)) ? "uppercase" : "")}>{children}</Link>
    )
}