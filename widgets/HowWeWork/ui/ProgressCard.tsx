import {type ReactNode} from "react";
import {Header} from "@/shared/ui/text/Header";
import {motion, useTransform, type MotionValue} from "framer-motion";
import {type ProgressItem} from "@/widgets/HowWeWork/ui/ProgressBlock";

export type Props = {
    item: ProgressItem;
    progressNeeded: number;
    currentProgress: MotionValue<number>;
}

export function ProgressCard ({item, progressNeeded, currentProgress} : Props) {
    const opacity = useTransform(
        currentProgress,
        [progressNeeded - 0.06, progressNeeded],
        [0, 1]
    );

    const y = useTransform(
        currentProgress,
        [progressNeeded - 0.06, progressNeeded],
        [40, 0]
    );

    const scale = useTransform(
        currentProgress,
        [progressNeeded - 0.06, progressNeeded],
        [0.68, 1]
    )
    console.log(progressNeeded, currentProgress)
    return (
        <motion.article
            className="flex flex-col items-center p-4 bg-white border-regular/20 border-1 rounded-2xl max-w-xs"
            style={{opacity, y, scale}}
        >
            <Header as="h3" variant="secondary">{item.title}</Header>
            <p className="text-base text-regular text-center">{item.content}</p>
        </motion.article>
    )
}