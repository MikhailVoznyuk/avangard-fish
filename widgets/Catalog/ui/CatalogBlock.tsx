"use client"

import {useState} from "react";
import {ProductCard, type ProductItem} from "@/entities/product";
import { Sidebar } from "./Sidebar";

export function CatalogBlock({products}: {products: ProductItem[]}) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [categories, setCategories] = useState<string[]>(products.map((product) => product.category));
    const [availability, setAvailability] = useState<string[]>(products.map((product) => product.availability));

    products = products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <div className={"w-full flex gap-8 px-8 min-h-96"}>
            <Sidebar
                onSearchInput={setSearchValue}
                onCategoryChoice={setCategories}
                onAvailabilityChoice={setAvailability}
                searchValue={searchValue}
            />

            <div className="w-full flex flex-row gap-6 flex-wrap">
                {products.length === 0 && <span className="text-lg text-regular">По данному поисковому запросу продукции не нашлось.</span>}
                {products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
        </div>
    )
}