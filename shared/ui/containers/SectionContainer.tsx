import {type ReactNode} from "react";
import { Header} from "@/shared/ui/text/Header";

interface Props {
    title: string;
    children: ReactNode;
}
export function SectionContainer({title, children}: Props) {
    return (
        <section className="flex flex-col items-center gap-10 w-full">
            <Header as={"h2"} variant="primary" size="xl" animated>{title}</Header>
            {children}
        </section>
    )
}