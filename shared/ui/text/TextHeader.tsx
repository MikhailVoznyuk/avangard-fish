import { type ElementType, type ReactNode } from "react";
import { type ClassValue } from "clsx";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import { cn } from "@/shared/utils/cn";

type Props = {
    as: ElementType;
    size: "sm" | "md" | "lg";
    children: ReactNode;
    className?: ClassValue;
    centered?: boolean;
    animated?: boolean;
}
const SIZES = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
}

export function TextHeader({
    as: Tag = "h3",
    size="md",
    children,
    className,
    centered = false,
    animated = true} : Props) {

    const body = <Tag
        className={cn("font-medium text-regular", SIZES[size], centered && "text-center", className)}
    >
        {children}
    </Tag>;

    return (animated) ? <Reveal>{body}</Reveal> : body;
}