import {useState} from "react";
import {
    PRODUCT_CATEGORY_LABEL,
    PRODUCT_AVAILABILITY_LABEL,
    type ProductCategory,
    type ProductAvailability,
} from "@/entities/product";

import {Input} from "@/shared/ui/form/Input";
import { Select } from "@/shared/ui/form/Select";


type Props = {
    onSearchInput: (prev: string) => void;
    searchValue: string;
    onCategoryChoice: (callback: (prev: ProductCategory[]) => ProductCategory[]) => void;
    categories: ProductCategory[];
    curCategories: ProductCategory[];
    onAvailabilityChoice: (callback: (prev: ProductAvailability[]) => ProductAvailability[]) => void;
    availability: ProductAvailability[];
    curAvailability: ProductAvailability[];
}

export function Sidebar({
        onSearchInput,
        searchValue,
        onCategoryChoice,
        categories,
        curCategories,
        onAvailabilityChoice,
        availability,
        curAvailability
}: Props) {
    return (
        <div className="w-80 flex flex-col gap-4">
            <div className="w-full justify-between h-10">
                <Input onChange={onSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
            <div className="w-full flex flex-col gap-4 bg-white border border-black/10 rounded-2xl p-4 shadow-md">
                <Select<ProductCategory>
                    title="Категории"
                    current={curCategories}
                    options={categories.map(
                        (c) => ({
                            label: PRODUCT_CATEGORY_LABEL[c],
                            value: c
                        })
                    )}
                    onChoice={onCategoryChoice}
                />
                <Select<ProductAvailability>
                    title="Наличие"
                    current={curAvailability}
                    options={availability.map(
                        (a) => ({
                            label: PRODUCT_AVAILABILITY_LABEL[a],
                            value: a
                        })
                    )}
                    onChoice={onAvailabilityChoice}
                />
            </div>

        </div>
    )
}
