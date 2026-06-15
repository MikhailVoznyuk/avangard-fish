import Image from "next/image";
import { Header } from "@/shared/ui/text/Header";
import { Reveal } from "@/shared/ui/reveal/Reveal";

interface Props {
    title: string;
    description: string;
    image: string;
    inverse?: boolean;
}

export function AdvantageCard({ title, description, image, inverse}: Props) {
    return (
        <Reveal>
            <div className="flex w-[640px] h-[260px] shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-2xl bg-white overflow-hidden">
                <div className="relative w-2/5 h-full">
                    <Image src={image}
                           alt="advantage side photo"
                           width={600}
                           height={600}
                           className="h-full w-full"
                    />
                    <div className="absolute top-0 right-0 w-1/5 h-full bg-linear-to-l from-white to-transparent" />
                </div>
                <div className="relative w-3/5" >
                    <div className="absolute z-0 -bottom-[300px] -right-[300px] w-[600px] h-[600px] bg-radial from-secondary/60  to-transparent to-60%" />
                    <div className="relative z-10 flex flex-col gap-3 p-4">
                        <Header as={"h3"} variant="secondary" size="lg">{title}</Header>
                        <span className="w-1/3 h-1 bg-secondary rounded-full" />
                        <p className="text-regular">{description}</p>
                    </div>

                </div>


            </div>
        </Reveal>

    )
}