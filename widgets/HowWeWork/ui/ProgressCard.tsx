import {type ReactNode} from "react";
import {Header} from "@/shared/ui/text/Header";
import {type MotionValue} from "framer-motion";
import {type ProgressItem} from "@/widgets/HowWeWork/ui/ProgressBlock";

export type Props = {
    item: ProgressItem;
    progressNeeded: number;
    currentProgress: MotionValue;
}

export function ProgressCard ({item, progressNeeded, currentProgress} : Props) {
    return (
        <article className="flex flex-col items-center">
            <Header as="h3" variant="secondary">{item.title}</Header>
            <p className="text-base text-regular text-center">{item.content}</p>
        </article>
    )
}