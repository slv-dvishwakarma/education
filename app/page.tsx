import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
  Stories,
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
      <Stories />
      <Policies />
      <GuidingPrinciple />
    </main>
  );
}
