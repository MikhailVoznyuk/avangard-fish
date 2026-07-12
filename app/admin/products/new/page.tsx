import Link from "next/link";
import { Header } from "@/shared/ui/text/Header";
import { ProductForm } from "@/widgets/AdminProducts/ui/ProductForm";

export default function NewProductPage() {
    return (
        <main className={"w-screen p-8"}>
            <div className="flex flex-col gap-2 mb-8">
                <Header variant="primary" as="h1" size={"lg"}>Создать объявление</Header>
                <Link href={"/admin/products"} className="text-secondary hover:text-primary transition-colors duration-300">
                    ← Назад
                </Link>
            </div>
            <ProductForm type="create"/>
        </main>
    )
}