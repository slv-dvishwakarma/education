import { HeroSlider, OurImpact } from "@/components/home";
import { ImageText, ImageWithText } from "@/components/home/ImageWithText";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <HeroSlider />
        <ImageWithText />
        <ImageText />
        <OurImpact />
      </main>
    </>
  );
}
