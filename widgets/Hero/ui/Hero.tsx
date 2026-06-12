"use client";

import {useState} from "react";
import {Header} from "@/shared/text/Header";
import {Button} from "@/shared/buttons/Button";

export function Hero() {
    return (
        <section className="relative">
            <div className="flex items-center relative w-[72vw] h-[600px] rounded-r-full bg-white shadow-2xl mt-24">
                <div className="flex flex-col gap-4 max-w-[724px] px-8">
                    <Header as="h1" variant="primary" className="text-4xl">Ваш надежный поставщик  рыбной продукции.</Header>
                    <Header as="h2" variant="secondary" className="text-2xl">Мы предлагаем широкий ассортимент продуктов с полным контролем качества на каждом этапе производства.</Header>
                    <div className="flex gap-4">
                        <Button variant="primary" handler={() => console.log('Отработал')}>Посмотреть каталог</Button>
                        <Button handler={() => console.log('Отработал')}>Связаться с нами</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}