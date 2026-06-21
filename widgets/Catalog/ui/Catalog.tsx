import { SectionContainer } from "@/shared/ui/containers/SectionContainer";
import {Product} from "@/entities/product/model/types";
import { ProductCard } from "@/entities/product/ui/ProductCard"

const products: Product[] = [
    {
        id: "1",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "кг",
        tags: "Глазурь: 0%;Н/К;ICF",
        imageUrl: "/images/hero/fish.png",
        category: "Филе",
        availability: "В наличии"
    },
    {
        id: "2",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "кг",
        tags: "Глазурь: 0%;Н/К;ICF",
        imageUrl: "/images/hero/fish.png",
        category: "Филе",
        availability: "В наличии"
    },
    {
        id: "3",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "кг",
        tags: "Глазурь: 0%;Н/К;ICF",
        imageUrl: "/images/hero/fish.png",
        category: "Филе",
        availability: "В наличии"
    },
    {
        id: "4",
        title: "Минтай 0% глазури ICF",
        slug: "mintai-0g-icf",
        description: "Филе минтая блочное 0% ICF, доставка по МО",
        price: 320,
        priceUnit: "кг",
        tags: "Глазурь: 0%;Н/К;ICF",
        imageUrl: "/images/hero/fish.png",
        category: "Филе",
        availability: "В наличии"
    }
]
export function Catalog() {
    return (
        <SectionContainer title="Каталог">
            <div className="w-full flex flex-row justify-center gap-8 flex-wrap">
                {products.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
        </SectionContainer>
    )
}