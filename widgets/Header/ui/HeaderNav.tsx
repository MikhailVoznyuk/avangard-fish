import { IconLink } from "@/shared/ui/links/IconLink";
import { ButtonLink } from "@/shared/ui/links/ButtonLink";

export function HeaderNav() {
    return (
        <section className="flex gap-8 items-center">
            <IconLink href="/" iconSrc="icons/headerNav/products.svg" uppercase>Каталог</IconLink>
            <IconLink href="/" iconSrc="icons/headerNav/info.svg" uppercase>О нас</IconLink>
            <IconLink href="/" iconSrc="icons/headerNav/phone-call.svg" uppercase>Контакты</IconLink>
            <div className={"flex flex-col gap-2"}>
                <ButtonLink variant="primary" uppercase={false} href="/" className="text-base px-2 py-1">
                    +7(985)006-49-95
                </ButtonLink>
                <ButtonLink variant="secondary" uppercase={false} href="/" className="text-base px-2 py-1">
                    info@avangard-fish.ru
                </ButtonLink>
            </div>

        </section>
    )
}