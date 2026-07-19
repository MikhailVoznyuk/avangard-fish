import Image from 'next/image';
import { Header } from "@/shared/ui/text/Header";
import { cn } from "@/shared/utils/cn";

interface Props {
    title: string;
    description: string;
    imageUrl: string;
    inverse?: boolean;
}

export function AdvantageCardRadial({ title, description, imageUrl, inverse=false }: Props) {
    return (
        <div className={cn("relative flex justify-end w-160 h-80 rounded-3xl bg-white border border-black/10 shadow-md overflow-hidden", inverse && "justify-start")}>
            <Image
                src={imageUrl}
                alt="advantage image"
                width={640}
                height={360}
                className={cn("absolute h-full w-full")} />
            <div className={cn("relative flex w-4/6 p-6 h-full bg-white shadow-xl", inverse ? "rounded-r-full justify-start pr-16" : "rounded-l-full justify-end pl-16 ")}>
                <div className={cn("flex flex-col gap-4 justify-center")}>
                    <div className={cn("flex flex-col gap-2")}>
                        <Header
                            variant="secondary"
                            as="h3"
                            size="lg"
                            className={cn("text-primary text-3xl")}>{title}</Header>
                        <span className="w-24 h-1 bg-secondary rounded-full" />
                    </div>
                    <p className={cn("text-accent text-xl font-semibold text-justify")}>{description}</p>
                </div>
                </div>

        </div>
    );
}