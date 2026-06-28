import {cn} from "@/shared/utils/cn";
import {ChangeEvent} from "react";

type Props = {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    className?: string
}


export function Input({onChange, value, placeholder="", className}: Props) {
    return (
        <input
            type="text"
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            className={cn("w-full h-full bg-white rounded-full border border-black/10 shadow-md px-2 py-1", className)}
        />
    )
}