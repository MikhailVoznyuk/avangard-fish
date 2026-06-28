import Image from "next/image";
import { cn } from "@/shared/utils/cn";

type Props = {
    onClick: () => void;
    iconSrc: string;
    className?: string;
    iconSize?: number
}

export function IconButton({onClick, iconSrc, className, iconSize}: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn("size-10 rounded-full flex items-center justify-center bg-white hover:bg-secondary/30 border border-black/10 transition-colors duration-300 cursor-pointer", className)}
        >
            <Image
                src={iconSrc}
                alt="button icon"
                width={64}
                height={64}
                className="size-7"
                style={iconSize ? {width: `${iconSize}px`, height: `${iconSize}px`} : {}}
            />
        </button>
    )
}