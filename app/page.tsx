import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <About />
      <OurVision />
      <OurApproach />
      <OurImpact />
    </main>
  );
}
