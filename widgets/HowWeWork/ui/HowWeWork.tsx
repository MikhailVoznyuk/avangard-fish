import {ProgressBlock } from "@/widgets/HowWeWork/ui/ProgressBlock";
import { SectionContainer } from "@/shared/ui/containers/SectionContainer";
import {Reveal} from "@/shared/ui/reveal/Reveal";

export function HowWeWork() {
    return (
        <SectionContainer title={"Как мы работаем"}>
            <ProgressBlock />

        </SectionContainer>
    )
}