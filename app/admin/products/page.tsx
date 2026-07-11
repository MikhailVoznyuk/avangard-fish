import { productRepository } from "@/entities/product/api/productRepository";
import { AdminProducts } from "@/widgets/AdminProducts";
import { ButtonLink } from "@/shared/ui/links/ButtonLink";
import { Header } from "@/shared/ui/text/Header";

export default async function AdminProductsPage() {
    const products = await productRepository.getAdminProducts();
    return (
        <main className="w-full p-8">
            <div className="w-full flex justify-between mb-8">
                <Header as="h1" variant="primary">Объявления</Header>
                <div>
                    <ButtonLink variant="secondary" href={"/admin/products/new"}>Создать</ButtonLink>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <AdminProducts products={products} />
            </div>
        </main>

    )
}