import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  OurRoadmap,
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
      <Stories />
      <OurRoadmap />
    </main>
  );
}
