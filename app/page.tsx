import {Hero} from "@/widgets/Hero";
import {Advantages} from "@/widgets/Advantages";

export default function Home() {
  return (
    <div className="w-screen">
      <main className='flex flex-col gap-8'>
          <Hero />
          <Advantages />
      </main>
    </div>
  );
}
