import "server-only";
import type { Prisma } from "@/generated/prisma/client"
import { prisma } from "@/shared/db/prisma";

export const productRepository = {
    getPublicProducts() {
        return prisma.product.findMany({
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
    },

    getAdminProducts() {
        return prisma.product.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
    },

    getProductsById(id: string) {
        return prisma.product.findUnique({
            where: {
                id
            }
        });
    },

    getProductsBySlug(slug: string) {
        return prisma.product.findUnique({
            where: {
                slug
            }
        });
    },

    createProduct(product: Prisma.ProductCreateInput) {
        return prisma.product.create({
            data: product
        });
    },

    updateProduct(id: string, productData: Prisma.ProductUpdateInput) {
        return prisma.product.update({
                where: {
                    id
                },
                data: productData
        });
    },

    deleteProduct(id: string) {
        return prisma.product.delete({
            where: {
                id
            }
        });
    }
}

export type AdminProductListItem = Awaited<ReturnType<typeof productRepository.getAdminProducts>>[number];

export type ProductItem = Awaited<ReturnType<typeof productRepository.getPublicProducts>>[number];