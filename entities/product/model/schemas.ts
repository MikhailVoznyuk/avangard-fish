import { z } from "zod";

export const productFormSchema = z.object({
    title: z.string().min(4, "Название слишком короткое"),
    slug: z.string().min(4, "Ссылка слишком короткая"),
    description: z.string().min(10, "Описание слишком короткое"),
    price: z.coerce.number().int("Цена должна быть целым числом").positive("Цена должна быть больше нуля"),
    priceUnit: z.enum(["PER_KG", "PER_ITEM", "PER_PACKAGE"]),
    tags: z.string(),
    imageUrl: z.string().min(4),
    category: z.enum(["FILLET", "CANNED", "CUTLETS", "RAW"]),
    availability: z.enum(["IN_STOCK", "TO_ORDER", "OUT_OF_STOCK"]),
});