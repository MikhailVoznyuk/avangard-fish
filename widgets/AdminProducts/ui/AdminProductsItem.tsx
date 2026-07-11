import { useState } from "react";
import type { AdminProductListItem } from "@/entities/product";
import { Header } from "@/shared/ui/text/Header";
import { Button } from "@/shared/ui/buttons/Button";
import { cn } from "@/shared/utils/cn";
import { ProductForm } from "@/widgets/AdminProducts/ui/ProductForm";
import { FormInput } from "@/shared/ui/form/FormInput";
import { FormFieldWrapper } from "@/shared/ui/form/FormFieldWrapper";
import { PRODUCT_PRICE_UNIT_LABEL, PRODUCT_CATEGORY_LABEL, PRODUCT_AVAILABILITY_LABEL } from "@/entities/product";

type Props = {
    product: AdminProductListItem
}
export function AdminProductsItem( {product}: Props ) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
             className="flex flex-col w-150 bg-white border border-black/10 shadow-md rounded-2xl p-4"
        >
            <div className="flex h-20 w-full justify-between items-center">
                <div className={cn("flex flex-col justify-between h-full", open && "opacity-0 pointer-events-none")} >
                    <Header
                        variant="secondary"
                        as="h4"
                        size="lg"
                        className="text-primary">{product.title}</Header>
                    <Header
                        variant="secondary"
                        as="h5"
                        size="sm"
                        className="text-secondary">{`Цена: ${product.price} ${PRODUCT_PRICE_UNIT_LABEL[product.priceUnit]}`}</Header>
                </div>

                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        handler={() => (setOpen((prev) => !prev))}
                        className="text-base px-2 py-1"

                    >{open ? "Свернуть" : "Развернуть"}</Button>

                    <Button
                        variant="secondary"
                        handler={() => console.log('Удалить')}
                        className="text-base px-2 py-1"
                    >Удалить</Button>
                </div>
            </div>
            {open && (
                <ProductForm product={product} />
            )}
        </div>
    )
}