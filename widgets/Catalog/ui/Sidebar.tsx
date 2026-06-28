"use client";

import { useState } from "react";
import {
    PRODUCT_CATEGORY_LABEL,
    PRODUCT_AVAILABILITY_LABEL,
    type ProductCategory,
    type ProductAvailability,
} from "@/entities/product";
import {Input} from "@/shared/ui/form/Input";
import { Select } from "@/shared/ui/form/Select";
import { IconButton } from "@/shared/ui/buttons/IconButton";
import { cn } from "@/shared/utils/cn";

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
        curAvailability,
}: Props) {

    const [filterOpened, setFilterOpened] = useState<boolean>(false);

    return (
        <div className="w-64 flex flex-col gap-2 shrink-0">
            <div className="w-full flex justify-between h-10 shrink-0">
                <div className={cn("flex  transition-all duration-300 shrink-0", filterOpened ? "w-10" : "w-[calc(256px-40px-8px)]")}>
                    <IconButton
                        onClick={() => setFilterOpened((prev) => !prev)}
                        iconSrc={'/icons/shared/search.svg'}
                        className={cn("shrink-0", !filterOpened && "w-0 hidden")}
                        iconSize={20}

                    />
                    <Input onChange={onSearchInput} value={searchValue} placeholder="Поиск..." className={cn(filterOpened && "w-0 hidden transition-all duration-300")} />
                </div>
                <div className={cn("flex justify-end overflow-hidden bg-white rounded-full border-black/10 shadow-md transition-all duration-300 text-sm", filterOpened ? "w-[calc(256px-40px-8px)] justify-center gap-2" : "w-10")}>
                    <IconButton
                        onClick={() => setFilterOpened((prev) => !prev) }
                        iconSrc={"/icons/shared/sorting.svg"}
                        className={cn(filterOpened ? "w-0 hidden" : "w-10")}
                    />
                    <div className={cn("flex gap-2 overflow-hidden", !filterOpened && "w-0")}>
                        <select>
                            <option value="category">Категория</option>
                            <option value="price">Цена</option>
                        </select>
                    </div>
                    <div className={cn("flex gap-2 overflow-hidden", !filterOpened && "w-0")}>
                        <select>
                            <option value="asc">Возр.</option>
                            <option value="desc" >Убыв.</option>
                        </select>
                    </div>

                </div>

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
