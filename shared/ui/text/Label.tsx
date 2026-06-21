import { type ReactNode } from "react"
import { type ClassValue } from "clsx";
import { cn } from "@/shared/utils/cn";

type Props = {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

const SIZES = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
}

export function Label({size="md", className, children} : Props) {
    return (
        <span
            className={cn("text-medium text-white px-4 py-1 bg-secondary rounded-full shadow-md", SIZES[size], className)}
        >{children}</span>
    )
}