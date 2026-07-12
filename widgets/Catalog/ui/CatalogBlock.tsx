"use client"

import {useState} from "react";
import {ProductCard, type ProductItem, type ProductCategory, type ProductAvailability} from "@/entities/product";
import { Sidebar } from "./Sidebar";

export function CatalogBlock({products}: {products: ProductItem[]}) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [curCategories, setCurCategories] = useState<ProductCategory[]>(products.map((product) => product.category));
    const [curAvailability, setCurAvailability] = useState<ProductAvailability[]>(products.map((product) => product.availability));

    const categories = Array.from(new Set(products.map((product) => product.category)));
    const availability = Array.from(new Set(products.map((product) => product.availability)));

    products = products.filter(
        (product) => product.title.toLowerCase().includes(searchValue.toLowerCase()) &&
            curCategories.includes(product.category) &&
            curAvailability.includes(product.availability)
    );

    return (
        <div className={"w-full flex gap-8 px-8 min-h-96"}>
            <Sidebar
                onSearchInput={setSearchValue}
                searchValue={searchValue}
                onCategoryChoice={setCurCategories}
                categories={categories}
                curCategories={curCategories}
                onAvailabilityChoice={setCurAvailability}
                availability={availability}
                curAvailability={curAvailability}
            />

            <div className="w-full flex flex-row gap-6 flex-wrap">
                {products.length === 0 && <span className="text-lg text-regular">По данному поисковому запросу продукции не нашлось.</span>}
                {products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
        </div>
    )
}