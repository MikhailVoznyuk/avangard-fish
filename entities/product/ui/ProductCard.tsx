import Image from "next/image";
import {Product} from "@/entities/product/model/types";
import { TextHeader } from "@/shared/ui/text/TextHeader";
import { Text } from "@/shared/ui/text/Text";

export function ProductCard(props: Product) {
    return (
        <article className="flex flex-col bg-white border border-black/10 rounded-2xl  shadow-lg overflow-hidden w-xs h-[440px] gap-4">
            <div className="relative w-full h-[220px]">
                <Image
                    src={props.imageUrl}
                    width={320}
                    height={320}
                    alt="product image"
                    className='w-full h-full'
                />
                <div className="absolute bottom-0 w-full h-[200px] bg-linear-to-t from-white to-transparent" />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <TextHeader as="h3" size="md">{props.title}</TextHeader>
                <Text size="md">{props.description}</Text>
            </div>

        </article>
    )
}