"use client"

import {type ReactNode} from "react";
import { motion } from 'framer-motion';

type Props = {
    children: ReactNode;
}

export function Reveal({children}: Props) {
    return <motion.div
        initial={{opacity: 0, y: 60, filter: 'blur(10px)'}}
        whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.8}}
    >
        {children}
    </motion.div>
}