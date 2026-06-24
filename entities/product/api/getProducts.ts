import {prisma} from "@/shared/db/prisma";

export async function getProducts() {
    return prisma.product.findMany({
        where: {
            availability: {
                not: "OUT_OF_STOCK"
            }
        },
        orderBy: {
            title: "asc"
        },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            price: true,
            priceUnit: true,
            tags: true,
            imageUrl: true,
            category: true,
            availability: true
        }
    })
}

export type ProductItem = Awaited<ReturnType<typeof getProducts>>[number];