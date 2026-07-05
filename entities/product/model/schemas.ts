import { z } from "zod";

export const productFormSchema = z.object({
    title: z.string().min(2),
    slug: z.string().min(2),
    description: z.string().min(10),
    price: z.coerce.number().int().positive(),
    priceUnit: z.enum(["PER_KG", "PER_ITEM", "PER_PACKAGE"]),
    tags: z.string(),
    imageUrl: z.string().min(1),
    category: z.enum(["FILLET", "CANNED", "CUTLETS", "RAW"]),
    availability: z.enum(["IN_STOCK", "TO_ORDER", "OUT_OF_STOCK"]),
});