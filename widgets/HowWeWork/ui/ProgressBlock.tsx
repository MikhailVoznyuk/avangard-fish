"use client";

import { useRef} from "react";
import { motion, useScroll, useSpring, type MotionValue} from "framer-motion";
import { ProgressCard } from "@/widgets/HowWeWork/ui/ProgressCard";

export type ProgressItem = {
    title: string;
    content: string;
};

const PROGRESS_ITEMS: ProgressItem[] = [
    {
        title: "Первый блок",
        content: 'Описание блока'
    },
    {
        title: "Второй блок",
        content: 'Описание блока'
    },
    {
        title: "Третий блок",
        content: 'Описание блока'
    }
];
export function ProgressBlock() {
    const ref = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const progress = useSpring(scrollYProgress,
        {
            stiffness: 120,
            damping: 30,
            mass: 0.2
        }
    );

    return (
        <article ref={ref} className="relative h-[400vh] w-screen">
            <div className="sticky top-1/2 w-full flex justify-center">
                <div className="relative flex flex-col w-full max-w-3xl">
                    <div className="flex justify-between">
                        {PROGRESS_ITEMS.map((item, i) => (
                            <ProgressCard
                                key={item.title}
                                item={item}
                                currentProgress={progress}
                                progressNeeded={i * (1 / PROGRESS_ITEMS.length)}
                            />
                        ))}
                    </div>
                    <div className="relative w-full h-2 rounded-full overflow-hidden">
                        <span className="absolute block left-0 top-0 size-full bg-secondary rounded-full" />
                        <motion.span
                            className="absolute  top-0 left-0 origin-left block size-full bg-primary"
                            style={{scaleX: progress}}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}