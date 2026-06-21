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

    return (
        <motion.div
            className="size-16 flex items-center justify-center rounded-full bg-primary text-white"
            style={{backgroundColor}}
        >
            <Image width={36} height={36} src={item.image} alt={`${item.title} icon `}/>
        </motion.div>
    )
}