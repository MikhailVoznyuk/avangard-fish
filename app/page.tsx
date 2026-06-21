import {Hero} from "@/widgets/Hero";
import {Advantages} from "@/widgets/Advantages";
import {HowWeWork} from "@/widgets/HowWeWork";
import {Catalog} from "@/widgets/Catalog";

export default function Home() {
  return (
    <div className="w-screen">
      <main className='flex flex-col gap-16'>
          <Hero />
          <Advantages />
          <HowWeWork />
          <Catalog />
          <footer className="w-full h-40 bg-primary"></footer>
      </main>
    </div>
  );
}
