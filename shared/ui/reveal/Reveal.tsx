"use client"

import {type ReactNode} from "react";
import { motion } from 'framer-motion';
import { type ClassValue } from "clsx";
import { cn } from "@/shared/utils/cn";
import { type CSSProperties} from "react";

type Props = {
    children: ReactNode;
    amount?: number;
    className?: ClassValue;
    style?: CSSProperties
}

export function Reveal({children, amount=0.2, className, style}: Props) {
    return <motion.div
        initial={{opacity: 0, y: 60, filter: 'blur(10px)'}}
        whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
        viewport={{once: true, amount}}
        transition={{duration: 0.8}}
        className={cn(className)}
        style={style}
    >
        {children}
    </motion.div>
}