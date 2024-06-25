import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
  Policies,
  GuidingPrinciple,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <About />
      <OurVision />
      <OurApproach />
      <OurImpact />
      <Policies />
      <GuidingPrinciple />
    </main>
  );
}
