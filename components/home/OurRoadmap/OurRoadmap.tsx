import { Heading, RoadmapItem, RoadmapItemType } from "@/components/core";
import React from "react";

export const OurRoadmap = () => {
  const data: RoadmapItemType[] = [
    {
      variant: "orange",
      year: "2023",
      heading: "Establishing",
      icon: "cog",
      type: "image",
      src: "/images/building.png",
      description:
        "Establishing our offline presence, building a strong advisory board, and laying the foundation for our tech platform.",
    },
    {
      variant: "purple",
      year: "2024",
      heading: "Launching",
      icon: "rocket",
      type: "image",
      src: "/images/rocket.png",
      description:
        "Launching our online platform with a focus on low-code/no-code development, AI/ML integration, and beta testing with a wide audience.",
    },
    {
      variant: "green",
      year: "2025",
      heading: "Expanding",
      icon: "graph",
      type: "image",
      src: "/images/scalable.png",
      description:
        "Expanding our course offerings, forging strategic partnerships with educational institutions, and reaching out to a broader demographic, including rural areas and schools.",
    },
  ];
  return (
    <div className="md:pb-[80px] md:pt-[20px] pt-[60px]">
      <div className="container">
        <Heading className="mb-10 md:text-center">Our Roadmap</Heading>
        <div className=" grid xl:grid-cols-3 grid-cols-1">
          {data.map((item, index: number) => {
            const { variant, heading, description, icon, year, type, src } =
              item;
            return (
              <RoadmapItem
                key={index}
                variant={variant}
                year={year}
                heading={heading}
                icon={icon}
                description={description}
                type={type}
                src={src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
