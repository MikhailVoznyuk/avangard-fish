import type { ReactNode } from "react";
import type { ClassValue } from "clsx";
import { cn } from "@/shared/utils/cn";

type Props = {
    label: string;
    children: ReactNode;
    className?: ClassValue
}

export function FormFieldWrapper({label, children, className}: Props) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            <div className="flex flex-col gap-0.5">
                {/*<span className="size-3 bg-secondary rounded-full"/>*/}
                <label className="text-xl">{label}</label>
                <span className="w-12 h-1 rounded-full bg-secondary"/>
            </div>
            {children}
        </div>
    )
}