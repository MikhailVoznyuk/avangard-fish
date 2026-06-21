import {IconLink} from "@/shared/ui/links/IconLink";

export function HeaderNav() {
    return (
        <section className="flex gap-8">
            <IconLink href="/" iconSrc="icons/products_primary.svg" uppercase>Каталог</IconLink>
            <IconLink href="/" iconSrc="icons/products_primary.svg" uppercase>О нас</IconLink>
            <IconLink href="/" iconSrc="icons/products_primary.svg" uppercase>Контакты</IconLink>

        </section>
    )
}