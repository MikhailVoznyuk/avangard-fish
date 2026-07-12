"use server"

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { productRepository } from "@/entities/product/api/productRepository";
import { parseProductTags } from "@/entities/product/model/lib";
import { productFormSchema } from "@/entities/product/model/schemas";


function getFormValues(formData: FormData) {
    const rawData = {
        title: formData.get("title"),
        slug: formData.get("slug"),
        description: formData.get("description"),
        price: formData.get("price"),
        priceUnit: formData.get("priceUnit"),
        category: formData.get("category"),
        availability: formData.get("availability"),
        imageUrl: formData.get("imageUrl"),
        tags: formData.get("tags")
    }

    const parsed = productFormSchema.safeParse(rawData);

    if (!parsed.success) {
        throw new Error("Некорректные данные формы");
    }

    return parsed.data;
}

export async function createProductAction(formData: FormData) {
    const formValues = getFormValues(formData);

    await productRepository.createProduct({
        ...formValues,
        tags: parseProductTags(formValues.tags)
    })

    revalidatePath("/");
    revalidatePath("/admin/products");

    redirect("/admin/products");
}

export async function updateProductAction(id: string, formData: FormData) {
    const formValues = getFormValues(formData);

    await productRepository.updateProduct(id, {
        ...formValues,
        tags: parseProductTags(formValues.tags)
    })

    revalidatePath("/admin");
    revalidatePath("/admin/products");
}

export async function deleteProductAction(id: string) {
    await productRepository.deleteProduct(id);

    revalidatePath("/admin");
    revalidatePath("/admin/products");
}


