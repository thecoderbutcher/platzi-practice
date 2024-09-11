import { Description, Hero, MainProducts } from "@/components/Home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mt-40 justify-center items-center content-center">
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
}
