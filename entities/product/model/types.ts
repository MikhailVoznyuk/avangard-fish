type Availability = "В наличии" | "Под заказ" | "Нет в продаже";
type Category = "Филе" | "Консервы" | "Котлеты" | "Без обработки";
type PriceUnit = "₽/кг" | "₽/шт" | "₽/уп";

export type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    priceUnit: PriceUnit;
    tags: string[] // через точку с запятой в CRM
    imageUrl: string;
    category: Category;
    availability: Availability;
}