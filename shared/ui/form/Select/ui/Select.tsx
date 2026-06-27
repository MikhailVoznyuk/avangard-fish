import { SelectOption } from "@/shared/ui/form/Select/ui/SelectOption";
import {TextHeader} from "@/shared/ui/text/TextHeader";

export type OptionItem<T extends String> = {
    label: string;
    value: T;
}
type Callback<T extends string> = (prev: T[]) => T[];

type Props<T extends string> = {
    title: string;
    options: OptionItem<T>[];
    onChoice: (callback: Callback<T>) => void;
    current: T[];
}

export function Select<T extends string>({title, options, onChoice, current}: Props<T>) {
    const onChoiceItem = (item: OptionItem<T>) => {
        if (current.includes(item.value)) {
            onChoice((prev) => prev.filter((prevItem) => prevItem !== item.value))
        } else {
            onChoice((prev) => [...prev, item.value])
        }


    }

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <TextHeader as="h5" size="md">{title}</TextHeader>
                <span className="h-1 w-16 bg-secondary rounded-full"></span>
            </div>

            {options.map((option) => {
                return (
                    <SelectOption
                        key={option.value}
                        item={option}
                        onChoice = { onChoiceItem }
                        active={current.includes(option.value)}
                    />
                )
            })}
        </div>
    )
}
