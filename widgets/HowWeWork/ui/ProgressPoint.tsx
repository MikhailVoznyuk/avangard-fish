import {motion, useTransform, type MotionValue} from "framer-motion";

type Props = {
    item: number;
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
            className="size-12 flex items-center justify-center rounded-full bg-primary text-white"
            style={{backgroundColor}}
        >
            {item}
        </motion.div>
    )
}