import { HeroSlider, OurImpact } from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-[400px]">
      <HeroSlider />
      <OurImpact />
    </main>
  );
}
