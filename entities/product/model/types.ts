export type ProductAvailability = "IN_STOCK" | "TO_ORDER" | "OUT_OF_STOCK";
export type ProductCategory = "FILLET" | "CANNED" | "CUTLETS" | "RAW";
export type ProductPriceUnit = "PER_KG" | "PER_ITEM" | "PER_PACKAGE";

export type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    priceUnit: ProductPriceUnit;
    tags: string[] // через точку с запятой в CRM
    imageUrl: string;
    category: ProductCategory;
    availability: ProductAvailability;
}

export type { ProductItem } from "@/entities/product";