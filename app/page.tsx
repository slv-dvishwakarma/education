import { ImageText, ImageWithText } from "@/components/ImageWithText";
import { HeroSlider, OurImpact } from "@/components/home";
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
