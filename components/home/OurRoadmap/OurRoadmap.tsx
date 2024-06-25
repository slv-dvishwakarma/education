import { Heading, RoadmapItem } from "@/components/core";
import React from "react";

export const OurRoadmap = () => {
  return (
    <div className="pb-[80px]">
      <div className="container">
        <Heading className="mb-10">Our Roadmap</Heading>
        <div className=" grid xl:grid-cols-3 grid-cols-1">
          <RoadmapItem
            variant="orange"
            year="2023"
            heading="Establishing"
            description="Establishing our offline presence, building a strong advisory board, and laying the foundation for our tech platform."
          />
          <RoadmapItem
            variant="purple"
            year="2024"
            heading="Launching"
            description="Launching our online platform with a focus on low-code/no-code development, AI/ML integration, and beta testing with a wide audience."
          />
          <RoadmapItem
            variant="green"
            year="2025"
            heading="Expanding"
            description="Expanding our course offerings, forging strategic partnerships with educational institutions, and reaching out to a broader demographic, including rural areas and schools."
          />
        </div>
      </div>
    </div>
  );
};
