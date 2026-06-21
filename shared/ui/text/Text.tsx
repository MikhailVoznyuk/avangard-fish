import { type ReactNode } from "react";
import {type ClassValue } from "clsx";
import {cn} from "@/shared/utils/cn";

type Props = {
    size: "sm" | "md" | "lg",
    children: ReactNode;
    className?: ClassValue;
}

const SIZES = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
}

export function Text({ size="md", children, className }: Props) {
    return (
        <p className={cn("font-medium text-regular", SIZES[size], className)}>
            {children}
        </p>
    )
}