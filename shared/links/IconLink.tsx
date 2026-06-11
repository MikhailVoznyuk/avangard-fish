import Image from "next/image";
import Link from "next/link";
import {ReactNode} from "react";
import {cn} from "@/shared/utils/cn";
import {type ClassValue} from "clsx";

type Props = {
    href: string;
    iconSrc: string;
    children: ReactNode;
    className?: ClassValue;
}

export function IconLink({href, iconSrc, children, className}: Props) {
    return (
        <Link href={href} className={cn("text-secondary text-3xl font-medium group/link", className)}>
            <Image src={iconSrc} alt={"nav icon"} className="w-8 h-8"/>
            <div className="relative flex flex-col items-center gap-1">
                {children}
                <span className="group-hover/link:w-full h-0.5 rounded-full bg-primar"/>
            </div>

        </Link>
    )
}