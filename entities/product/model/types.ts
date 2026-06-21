type Availability = "В наличии" | "Под заказ" | "Нет в продаже"
type Category = "Филе" | "Консервы" | "Котлеты" | "Без обработки"
export type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    priceUnit: string;
    tags: string; // через точку с запятой
    imageUrl: string;
    category: Category;
    availability: Availability;
}