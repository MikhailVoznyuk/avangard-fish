import Image from "next/image";

import {type ProgressItem} from "@/widgets/HowWeWork/ui/ProgressBlock";
import {motion, useTransform, type MotionValue} from "framer-motion";

type Props = {
    item: ProgressItem;
    progressNeeded: number;
    currentProgress: MotionValue<number>
}

export function ProgressPoint({item, progressNeeded, currentProgress}: Props) {
    const backgroundColor = useTransform(
        currentProgress,
        [progressNeeded - 0.06, progressNeeded],
        ["#1DA2D8", "#064273"]
    )

    const transform = useTransform(
        currentProgress,
        [progressNeeded - 0.06, progressNeeded],
        ["scale(1)", "scale(1.24)"]
    )

    return (
        <motion.div
            className="size-12 flex items-center justify-center rounded-full bg-primary text-white origin-center"
            style={{backgroundColor, transform}}
        >
            <Image width={26} height={26} src={item.image} alt={`${item.title} icon `}/>
        </motion.div>
    )
}