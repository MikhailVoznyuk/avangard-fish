import {type ElementType, ReactNode} from "react";
import {type ClassValue} from "clsx";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import {cn} from "@/shared/utils/cn";

interface Props {
    variant: 'primary' | 'secondary'
    as: ElementType,
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: ClassValue;
    animated?: boolean;
    centered?: boolean;
}

export function Header({as: Tag = 'h1', variant = 'primary', size='lg', children, className, animated=false, centered=false}: Props) {
    const sizes = {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: variant === "primary" ? "text-4xl" : "text-2xl"
    }
    const BASE = `${(variant === "primary") ? "text-primary uppercase font-semibold" : "text-secondary font-semibold"} ${(centered) ? "text-center" : ""}`
    return (
        (animated) ? (
            <Reveal>
                <Tag className={cn(BASE, sizes[size], className)}>{children}</Tag>
            </Reveal>
        ) : (
            <Tag className={cn(BASE, sizes[size], className)}>{children}</Tag>
        )
    )
}