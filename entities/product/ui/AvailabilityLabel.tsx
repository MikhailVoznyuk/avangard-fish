import { type ProductAvailability } from "@/entities/product";
import { PRODUCT_AVAILABILITY_LABEL } from "@/entities/product/model/constants";
import { Label } from "@/shared/ui/text/Label";
import { cn } from "@/shared/utils/cn";
import { type ClassValue } from "clsx";

type Props = {
    availability: ProductAvailability;
    className?: ClassValue;
}

const styles = {
    IN_STOCK: "bg-[#00C707]",
    TO_ORDER: "bg-[#E58918]",
    OUT_OF_STOCK: "bg-[#E51818]",
} as const;

export const AvailabilityLabel = ({availability, className}: Props) => {
    return <Label size="md" className={cn(styles[availability], className)}>{PRODUCT_AVAILABILITY_LABEL[availability]}</Label>
}