import { ImageText, ImageWithText } from "@/components/core/ImageWithText";
import { HeroSlider, OurImpact } from "@/components/home";
import { About } from "@/components/home/About";

export default function Home() {
  return (
    <>
      <main>
        <HeroSlider />
        <About />
        <OurImpact />
      </main>
    </>
  );
}
