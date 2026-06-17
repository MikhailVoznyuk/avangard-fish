import {Hero} from "@/widgets/Hero";
import {Advantages} from "@/widgets/Advantages";
import {HowWeWork} from "@/widgets/HowWeWork";

export default function Home() {
  return (
    <div className="w-screen">
      <main className='flex flex-col gap-16'>
          <Hero />
          <Advantages />
          <HowWeWork />
      </main>
    </div>
  );
}
