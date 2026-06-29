import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    const product = await prisma.product.create({
        data: {
            availability: "OUT_OF_STOCK",
            category: "CANNED",
            description: "Консервы из трески",
            imageUrl: "/images/hero/fish.png",
            price: 400,
            priceUnit: "PER_KG",
            slug: "conservy-treska",
            tags: ["Консервы", "Полуфабрикат"],
            title: "Консервы из трески в банке",
        }
    });

    console.log(product);
}

main()
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


