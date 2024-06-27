import {
  HeroSlider,
  OurImpact,
  OurVision,
  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Ventures,
  Blog,
  Courses,
  Contact,
  Pillars,
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
      <Pillars />
      <Stories />
      <OurRoadmap />
      <JoinUs />
      <Ventures />
      <Blog />
      <Courses />
      <Contact />
    </main>
  );
}
