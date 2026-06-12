import {type ElementType, ReactNode} from "react";
import {type ClassValue} from "clsx";
import {cn} from "@/shared/utils/cn";

interface Props {
    variant: 'primary' | 'secondary'
    as: ElementType,
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: ClassValue
}

const SIZES = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
}

export function Header({as: Tag = 'h1', variant = 'primary', size='lg', children, className}: Props) {
    const BASE = (variant === 'primary') ? 'text-primary uppercase font-semibold' : 'text-secondary font-semibold'
    return (
        <Tag className={cn(BASE, SIZES[size], className)}>{children}</Tag>
    )
}