import type { ClassValue } from "clsx";
import { cn } from "@/shared/utils/cn";

type Props = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    containerClassName?: ClassValue;
    inputClassName?: ClassValue
}

export function FormInput({name, value, onChange, containerClassName, inputClassName}: Props) {
    return (

        <input
            name={name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className={cn("bg-white rounded-full border border-black/10 px-4 py-1 shadow-md w-40", inputClassName)}
        />
    )
}