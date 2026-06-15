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
        <Link href={href} className={
            cn(
                "flex gap-1 text-secondary text-xl font-medium group/navLink",
                className)
        }>
            <Image src={iconSrc} alt={"nav icon"} className="w-7 h-7" width={64} height={64} />
            <div className="relative group-hover/navLink:-translate-y-0.5  flex flex-col items-center justify-center gap-[1px] transition-transform duration-300">
                {children}
                <span className="group-hover/navLink:w-full w-0 h-0.5 rounded-full bg-primary transition-all duration-300"/>
            </div>

        </Link>
    )
}