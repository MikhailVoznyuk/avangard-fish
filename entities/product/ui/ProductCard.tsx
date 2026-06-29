"use client"

import Image from "next/image";
import {type ProductItem} from "@/entities/product";
import {PRODUCT_CATEGORY_LABEL, PRODUCT_PRICE_UNIT_LABEL} from "@/entities/product/model/constants";
import { TextHeader } from "@/shared/ui/text/TextHeader";
import { Text } from "@/shared/ui/text/Text";
import {AvailabilityLabel} from "@/entities/product/ui/AvailabilityLabel";
import { Label } from "@/shared/ui/text/Label";
import { Button } from "@/shared/ui/buttons/Button";

export function ProductCard(props: ProductItem) {
    return (
        <article className="flex flex-col bg-white border border-black/10 rounded-2xl  shadow-lg overflow-hidden w-xs h-110 gap-4">
            <div className="relative w-full h-50">
                <Image
                    src={props.imageUrl}
                    width={320}
                    height={320}
                    alt="product image"
                    className='w-full h-full'
                />
                <div className="absolute bottom-0 w-full h-50 bg-linear-to-t from-white to-transparent" />
                <AvailabilityLabel
                    availability={props.availability}
                    className="absolute top-4 right-4"
                />
            </div>
            <div className="p-4 flex flex-col justify-between grow">
                <div className="flex flex-col gap-3">
                    <TextHeader as="h3" size="md" animated={false}>{props.title}</TextHeader>
                    <div className="flex gap-2">
                        {props.tags.map((tag) => <Label key={tag} size="sm">{tag}</Label>)}
                    </div>
                    <Text size="md">{props.description}</Text>
                </div>
                <div className="flex justify-between items-center">
                    <TextHeader as="h5" size="lg" className="text-primary" animated={false}>
                        {`${props.price} ${PRODUCT_PRICE_UNIT_LABEL[props.priceUnit]}`}
                    </TextHeader>
                    <Button handler={() => {}} variant={"secondary"} className="bg-primary hover:bg-secondary">Заказать</Button>
                </div>
            </div>
        </article>
    )
}