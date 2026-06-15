import {IconLink} from "@/shared/ui/links/IconLink";

export function HeaderNav() {
    return (
        <section className="flex gap-8">
            <IconLink href="/" iconSrc="icons/products_primary.svg">Каталог</IconLink>
            <IconLink href="/" iconSrc="icons/products_primary.svg">О нас</IconLink>
            <IconLink href="/" iconSrc="icons/products_primary.svg">Контакты</IconLink>

        </section>
    )
}