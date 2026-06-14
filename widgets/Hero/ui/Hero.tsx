"use client";
import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";
import {Header} from "@/shared/text/Header";
import {Button} from "@/shared/buttons/Button";


export function Hero() {
    const offsetY: number = 96;
    return (
        <section className="relative w-full h-[600px]" style={{height: `calc(100vh - ${offsetY}px)`}}>
            <motion.div
                initial={{opacity: 0, x: -200, filter: 'blur(10px)'}}
                whileInView={{opacity: 1, x: 0, filter: 'blur(0px)'}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.8}}
                className="flex items-center relative z-10 w-[80vw] max-w-[1080px] h-full rounded-r-full bg-white shadow-2xl overflow-hidden"
            >
                <motion.div
                    initial={{opacity: 1, x: -200, filter: 'blur(10px)'}}
                    whileInView={{opacity: 1, x: 0, filter: 'blur(0px)'}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.8, delay: 0.3}}
                    className="relative z-10 flex flex-col justify-center gap-4 max-w-[724px] h-full px-8 bg-white rounded-r-full "
                >
                    <Header as="h1" variant="primary" className="text-4xl">Ваш надежный поставщик  рыбной продукции.</Header>
                    <Header as="h2" variant="secondary" className="text-2xl">Мы предлагаем широкий ассортимент продуктов с полным контролем качества на каждом этапе производства.</Header>
                    <div className="flex gap-4">
                        <Button variant="primary" handler={() => console.log('Отработал')}>Посмотреть каталог</Button>
                        <Button handler={() => console.log('Отработал')}>Связаться с нами</Button>
                    </div>
                </motion.div>
                <div
                    className="absolute z-0 right-0 top-0 h-full"
                >
                    <Image
                        src="/images/hero/fish_production.jpg"
                        width={1920}
                        height={1080}
                        loading="eager"
                        className="w-full h-full object-cover inset-shadow-white inset-shadow-sm"
                        alt={'fish image'}
                    />
                    <div className='top-0 left-0 absolute w-full h-full bg-radial from-transparent to-white to-[80%] inset-shadow-sm inset-shadow-white' />
                </div>
            </motion.div>
            <div className='absolute right-0 top-0 z-0 w-full h-full'>
                <video
                    className="w-full h-full object-cover inset-shadow-lg"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/videos/hero/hero.mp4" />
                </video>
            </div>
        </section>
    )
}