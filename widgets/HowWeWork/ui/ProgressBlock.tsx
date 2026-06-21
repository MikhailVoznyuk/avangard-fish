"use client";

import { useRef} from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue} from "framer-motion";
import { Reveal } from "@/shared/ui/reveal/Reveal";
import { ProgressCard } from "@/widgets/HowWeWork/ui/ProgressCard";
import { ProgressPoint } from "@/widgets/HowWeWork/ui/ProgressPoint";

export type ProgressItem = {
    title: string;
    content: string;
    image: string;
};

const PROGRESS_ITEMS: ProgressItem[] = [
    {
        title: "Заключение сделки и расчеты",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: "/icons/howWeWork/contract.svg"
    },
    {
        title: "Производство",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: "/icons/howWeWork/fish.svg",
    },
    {
        title: "Доставка",
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: "/icons/howWeWork/truck.svg"
    }
];
export function ProgressBlock() {
    const ref = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const progress = useSpring(scrollYProgress,
        {
            stiffness: 120,
            damping: 30,
            mass: 0.2
        }
    );


    const CARD_SIZE = 320;
    const pointSize = 16 * 4;

    return (
        <article ref={ref} className="relative h-[400vh] w-screen">
            <div className="sticky top-1/4 w-full flex justify-center">
                <div className="relative flex flex-col items-center w-full max-w-5xl gap-12">
                    <Reveal className="w-full flex justify-between">
                        {PROGRESS_ITEMS.map((item, i) => (
                            <ProgressCard
                                key={item.title}
                                item={item}
                                currentProgress={progress}
                                progressNeeded={i * (1 / (PROGRESS_ITEMS.length - 1))}
                            />
                        ))}

                    </Reveal>
                    <Reveal className="relative" style={{width: `calc(100% - ${CARD_SIZE}px + ${pointSize}px)`}}>
                        <div className="relative w-full h-2 rounded-full overflow-hidden"
                        >
                            <span className="absolute block left-0 top-0 size-full bg-secondary rounded-full" />
                            <motion.span
                                className="absolute  top-0 left-0 origin-left block size-full bg-primary"
                                style={{scaleX: progress}}
                            />
                        </div>
                        <div className="w-full absolute top-0 flex justify-between"
                             style={{transform: `translateY(calc(-50% + 4px))`}}>
                            {PROGRESS_ITEMS.map((item, i) => (
                                <ProgressPoint
                                    key={item.title}
                                    item={item}
                                    progressNeeded={i * (1 / (PROGRESS_ITEMS.length - 1))}
                                    currentProgress={progress}
                                />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </article>
    )
}