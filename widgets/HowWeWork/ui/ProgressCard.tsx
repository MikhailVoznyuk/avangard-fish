import {type ReactNode} from "react";

export type Props = {
    title: string;
    content: string;
}

export function TimelineItem({title, content} : Props) {
    return (
        <article className="flex flex-col items-center"></article>
    )
}