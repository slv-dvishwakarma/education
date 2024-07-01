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
  HomeContactUs,
  AccordionPageTemplate,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";

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
      <Ventures />
      <JoinUs />
      <Courses />
      <HomeContactUs />
      <Blog />
      <AccordionPageTemplate />
      {/* <Contact /> */}
    </main>
  );
}
