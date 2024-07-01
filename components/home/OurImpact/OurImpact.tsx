import { Heading, IconBox } from "@/components/core";
import { cn } from "@/lib/utils";
import { url } from "inspector";
import React from "react";

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: { url: string; target: "_blank" | "_self" };
};

export const OurImpact = ({
  isWhite,
  heading,
}: {
  isWhite?: boolean;
  heading?: string;
}) => {
  const data: ItemType[] = [
    {
      title: "Economic Independence",
      description:
        "We have successfully helped individuals like Maharaju, Kishore, and Sonu triple their salaries and transition into high-demand tech roles, contributing to their economic independence.",
      image: "/images/economic-independence.png",
      link: { url: "/impact/economic-independence", target: "_self" },
    },
    {
      title: "Global Recognition",
      description:
        "Our skilled workforce has served international clients, optimizing operations and saving costs for companies like Mindmaster Singapore and XULifestyle.",
      image: "/images/global-recognition.png",
      link: { url: "/impact/global-recognition", target: "_self" },
    },
    {
      title: "Empowering Women",
      description:
        "Deepti's journey from a housewife to a confident Python developer exemplifies our commitment to empowering women and helping them re-enter the workforce.",
      image: "/images/empowering-women.png",
      link: { url: "/impact/empowering-women", target: "_self" },
    },
    {
      title: "Enhance personal skills",
      description:
        "Empower learners with comprehensive coding knowledge for educational and coaching purposes.",
      image: "/images/enhance-personal-skills.png",
      link: { url: "/impact/enhance-personal-skills", target: "_self" },
    },
    {
      title: "Sufficient Knowledge",
      description:
        "Studying keeps your brain growing because we all know that there is no limit to knowledge.",
      image: "/images/sufficient-knowledge.png",
      link: { url: "/impact/sufficient-knowledge", target: "_self" },
    },
    {
      title: "Self Learning",
      description:
        "You can learn anytime from anywhere, giving you full control over your studies with our tools and courses.",
      image: "/images/self-learning.png",
      link: { url: "/impact/self-learning", target: "_self" },
    },
  ];
  return (
    <div className={cn("py-[70px]", isWhite ? "" : "bg-gray-100")}>
      <div className="container space-y-10">
        <Heading className="text-center">
          {heading ? heading : "Our Impact"}
        </Heading>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <IconBox
                key={index}
                title={title}
                description={description}
                icon={image}
                link={link}
                isBordered={isWhite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
