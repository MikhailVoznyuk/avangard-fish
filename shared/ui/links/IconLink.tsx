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
    uppercase?: boolean;
}

export function IconLink({href, iconSrc, children, className, uppercase}: Props) {
    return (
        <Link href={href} className={
            cn(
                "flex gap-1.5 text-primary text-xl font-medium group/navLink",
                className)
        }>
            <Image src={iconSrc} alt={"nav icon"} className="relative top-0.5 size-6" width={64} height={64} />
            <div
                className={`${uppercase ? "uppercase text-lg" : ""} relative group-hover/navLink:-translate-y-1  flex flex-col justify-center items-center font-medium transition-transform duration-300`}>
                {children}
                <span className="group-hover/navLink:w-full w-6 h-0.5 rounded-full bg-secondary transition-all duration-300"/>
            </div>

        </Link>
    )
}