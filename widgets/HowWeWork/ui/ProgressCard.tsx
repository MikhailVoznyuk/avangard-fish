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
            className="relative flex flex-col w-[280px] bg-white border-2 border-primary rounded-2xl max-w-xs shadow-lg"
            style={{opacity, y, scale}}
        >

            <Header as="h3" variant="secondary" className="relative -top-0.5 -left-0.5 bg-primary text-white px-4 py-2 rounded-xl rounded-br-2xl rounded-tr-none rounded-bl-none w-fit grow-0 ">{item.title}</Header>
            <p className=" p-4 pt-2 text-base text-regular text-justify font-semibold">{item.content}</p>
        </motion.article>
    )
}