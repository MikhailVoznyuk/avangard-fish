import {
    AdminProductListItem,
    PRODUCT_AVAILABILITY_LABEL,
    PRODUCT_CATEGORY_LABEL,
    PRODUCT_PRICE_UNIT_LABEL
} from "@/entities/product";
import {cn} from "@/shared/utils/cn";
import {FormFieldWrapper} from "@/shared/ui/form/FormFieldWrapper";
import {FormInput} from "@/shared/ui/form/FormInput";
import {Button} from "@/shared/ui/buttons/Button";
import {useState} from "react";

type Props = {
    product?: Partial<AdminProductListItem>;
}

export function ProductForm({ product = {} }: Props) {
    const [productData, setProductData] = useState(product);

    const parseTags = (tags: string) => {
        return tags.split(",").map((tag) => tag.trim());
    }

    const handleChange = <K extends keyof AdminProductListItem>(key: K, value: AdminProductListItem[K]) => {
        setProductData((prev) => (
            {
                ...prev,
                [key]: value
            }
        ))
    }

    return (
        <form id={product.id} className={cn("flex flex-col gap-8 w-full")}>
            <div className="flex flex-col gap-6">
                <FormFieldWrapper label={"Название объявления"}>
                    <FormInput
                        name={"productTitle"}
                        value={productData.title ?? ""}
                        onChange={(value)  => handleChange("title", value)}
                        inputClassName="w-80"
                    />
                </FormFieldWrapper>

                <FormFieldWrapper label={"Цена"}>
                    <div className="flex flex-1 items-center">
                        <FormInput
                            name={"productPrice"}
                            value={String(productData.price)}
                            onChange={(value)  => handleChange("price", +value)}
                            inputClassName="w-20"
                        />

                        <select
                            name={"productPriceUnit"}
                            value={productData.priceUnit}
                            onChange={(event) => handleChange("priceUnit", event.target.value as AdminProductListItem["priceUnit"])}
                            className="px-2 py-1"
                        >
                            {Object.entries(PRODUCT_PRICE_UNIT_LABEL).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    </div>
                </FormFieldWrapper>

                <FormFieldWrapper label={"Описание"}>
                            <textarea
                                name={"productImage"}
                                value={productData.description}
                                onChange={(event)  => handleChange("description", event.target.value)}
                                className="bg-white border border-black/10 rounded-2xl w-100 h-60 p-4 shadow-md"
                            />
                </FormFieldWrapper>

                <FormFieldWrapper label="Категория">
                    <select
                        name={"productCategory"}
                        value={productData.category}
                        onChange={(event) => handleChange("category", event.target.value as AdminProductListItem["category"])}
                        className="w-38 rounded-full bg-white border border-black/10 px-2 py-1 shadow-md "
                    >
                        {Object.entries(PRODUCT_CATEGORY_LABEL).map(([key, value]) => (
                            <option key={key} value={key}>{value}</option>
                        ))}
                    </select>
                </FormFieldWrapper>
                <FormFieldWrapper label="Наличие">
                    <select
                        name={"productAvailability"}
                        value={productData.availability}
                        onChange={(event) => handleChange("availability", event.target.value as AdminProductListItem["availability"])}
                        className="w-38 rounded-full bg-white border border-black/10 px-2 py-1 shadow-md "
                    >
                        {Object.entries(PRODUCT_AVAILABILITY_LABEL).map(([key, value]) => (
                            <option key={key} value={key}>{value}</option>
                        ))}
                    </select>
                </FormFieldWrapper>
                <FormFieldWrapper label={"Теги через запятую"}>
                    <FormInput
                        name={"productTags"}
                        value={productData?.tags?.join(', ') ?? ""}
                        onChange={(value)  => handleChange("tags", parseTags(value))}
                        inputClassName="w-100"
                    />
                </FormFieldWrapper>
                <FormFieldWrapper label={"Cсылка на фото"}>
                    <FormInput
                        name={"productImage"}
                        value={productData.imageUrl ?? ""}
                        onChange={(value)  => handleChange("imageUrl", value)}
                        inputClassName="w-64"
                    />
                </FormFieldWrapper>
                <FormFieldWrapper label={"Текст ссылки (только английский алфавит, цифры, тире)"}>
                    <FormInput
                        name={"productSlug"}
                        value={productData.slug ?? ""}
                        onChange={(value)  => handleChange("slug", value)}
                        inputClassName="w-64"
                    />
                </FormFieldWrapper>
            </div>
            <div className="flex  p-4 justify-end">
                <Button
                    type="submit"
                    variant="secondary"
                    handler={() => {}}
                >Сохранить</Button>
            </div>

        </form>
    )
}