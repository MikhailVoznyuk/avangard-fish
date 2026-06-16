import {AdvantageCard} from "@/widgets/Advantages/ui/AdvantageCard";
import { SectionContainer } from "@/shared/ui/containers/SectionContainer";

type Advantage = {
    title: string;
    description: string;
    image: string;
}

const ADVANTAGES_LIST: Advantage[] = [

]

export function Advantages() {
    return (
        <SectionContainer title="Наши преимущества">
            <div className="flex justify-center gap-6 flex-wrap">
                <AdvantageCard
                    title={"Lorem ipsum dolor sit amet"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                    image={"/images/hero/fish.png"}
                />
                <AdvantageCard
                    title={"Lorem ipsum dolor sit amet"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                    image={"/images/hero/fish.png"}
                />
                <AdvantageCard
                    title={"Lorem ipsum dolor sit amet"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                    image={"/images/hero/fish.png"}
                />
                <AdvantageCard
                    title={"Lorem ipsum dolor sit amet"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
                    image={"/images/hero/fish.png"}
                />
            </div>
        </SectionContainer>
    )
}