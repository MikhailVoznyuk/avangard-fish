import {useState} from "react";
import {Inder} from "next/dist/compiled/@next/font/dist/google";
import {Input} from "@/shared/ui/form/Input";

type Props = {
    onSearchInput: (prev: string) => void;
    onCategoryChoice: (prev: string[]) => void;
    onAvailabilityChoice: (prev: string[]) => void;
    searchValue: string;
}

export function Sidebar({onSearchInput, searchValue, onCategoryChoice, onAvailabilityChoice}: Props) {
    return (
        <div className="w-80 flex flex-col gap-4">
            <div className="w-full justify-between h-10">
                <Input onChange={onSearchInput} value={searchValue} />
            </div>
            <div className="w-full bg-black h-full rounded-2xl">Тык</div>
        </div>
    )
}
