export {
    PRODUCT_CATEGORY_LABEL,
    PRODUCT_AVAILABILITY_LABEL,
    PRODUCT_PRICE_UNIT_LABEL
} from "@/entities/product/model/constants";

export {
    type ProductAvailability,
    type ProductCategory,
    type ProductPriceUnit,
    type Product }
from "@/entities/product/model/types";

export type { ProductItem } from "@/entities/product/api/productRepository";
export type { AdminProductListItem } from "@/entities/product/api/productRepository";

export{ ProductCard } from "@/entities/product/ui/ProductCard";