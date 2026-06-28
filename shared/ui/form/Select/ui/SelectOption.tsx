import {cn} from "@/shared/utils/cn";
import { type OptionItem } from "@/shared/ui/form/Select/ui/Select";
import Image from "next/image";

type Props<T extends string> = {
    item: OptionItem<T>;
    onChoice: (item: OptionItem<T>) => void;
    active: boolean;
}

export function SelectOption<T extends string>({item, onChoice, active}: Props<T>) {
    return (
        <button
            type="button"
            onClick={() => onChoice(item)}
            className="flex gap-4 grow-0 items-center text-regular"
        >
            <div className={cn("size-6 flex items-center justify-center border-2 border-secondary overflow-hidden rounded-sm", active && "bg-secondary")}>
                {active && <Image
                    src={'/icons/shared/check.svg'}
                    width={64}
                    height={64}
                    alt="check mark"
                    className="size-6"
                />}
            </div>
            {item.label}
        </button>
    )
}