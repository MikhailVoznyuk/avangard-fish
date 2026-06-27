import { SectionContainer } from "@/shared/ui/containers/SectionContainer";
import {type Product, type ProductItem} from "@/entities/product";
import { getProducts } from "@/entities/product/server";

import { CatalogBlock } from "@/widgets/Catalog/ui/CatalogBlock";
import {PRODUCT_CATEGORY_LABEL, PRODUCT_AVAILABILITY_LABEL, PRODUCT_PRICE_UNIT_LABEL} from "@/entities/product/model/constants";
import { ProductCard } from "@/entities/product/ui/ProductCard"

// TODO переписать продукты в связи с новыми типами
const products: ProductItem[] = [
    {
        id: "1",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "PER_KG",
        tags: ["Глазурь: 0%", "Н/К", "ICF"],
        imageUrl: "/images/hero/fish.png",
        category: "FILLET",
        availability: "IN_STOCK"
    },
    {
        id: "2",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "PER_KG",
        tags: ["Глазурь: 0%", "Н/К", "ICF"],
        imageUrl: "/images/hero/fish.png",
        category: "FILLET",
        availability: "IN_STOCK"
    },
    {
        id: "3",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "PER_KG",
        tags: ["Глазурь: 0%", "Н/К", "ICF"],
        imageUrl: "/images/hero/fish.png",
        category: "FILLET",
        availability: "IN_STOCK"
    },
    {
        id: "4",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "PER_KG",
        tags: ["Глазурь: 0%", "Н/К", "ICF"],
        imageUrl: "/images/hero/fish.png",
        category: "FILLET",
        availability: "IN_STOCK"
    },
]

export async function Catalog() {
    const products = await getProducts();
    return (
        <SectionContainer title="Каталог">
            <CatalogBlock products={products} />
        </SectionContainer>
    )
}