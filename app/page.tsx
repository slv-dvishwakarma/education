import { ImageText, ImageWithText } from "@/components/ImageWithText";
import { HeroSlider } from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      <HeroSlider />
      <ImageWithText />
      <ImageText />
    </main>
    </>
  );
}
