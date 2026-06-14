import Image from "next/image";
import {HeaderNav} from "@/widgets/Header/ui/HeaderNav";

export function Header() {
    return (
        <>
            <header className="fixed z-20 top-0 left-0 w-full h-24 px-4 flex items-center justify-between bg-white shadow-lg">
                <Image src="logo.svg" alt="company logo" className="w-28" width={256} height={256} />
                <HeaderNav />
            </header>
            <div className='h-24' />
        </>
    )
}
