"use client";

import { useState } from "react";
import type { AdminProductListItem } from "@/entities/product/api/productRepository";
import { AdminProductsItem } from "@/widgets/AdminProducts/ui/AdminProductsItem";
import { Button } from "@/shared/ui/buttons/Button";

type Props = {
    products: AdminProductListItem[];
}

export function AdminProducts({products}: Props) {

    if (products.length === 0) {
        return (
            <div>Товары пока не добавлены</div>
        )
    }
    return (
        <div className="flex flex-col gap-6">
            {products.map(product => (
                <AdminProductsItem  key={product.id} product={product} />)
            )}
        </div>

    )
}