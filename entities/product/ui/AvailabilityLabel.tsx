import { Label } from "@/shared/ui/text/Label";
import { cn } from "@/shared/utils/cn";
import { type ClassValue } from "clsx";

type Props = {
    availability: "inStock" | "toOrder" | "outOfStock";
    className?: ClassValue;
}

const styles = {
    inStock: "bg-[#00C707]",
    toOrder: "bg-[#E58918]",
    outOfStock: "bg-[#E51818]",
}

const labelContent = {
    inStock: "В наличии",
    toOrder: "Под заказ",
    outOfStock: "Нет в продаже",
}

export const AvailabilityLabel = ({availability, className}: Props) => {
    return <Label size="md" className={cn(styles[availability], className)}>{labelContent[availability]}</Label>
}