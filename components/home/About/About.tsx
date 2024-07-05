import React from "react";
import { ImageBox } from "@/components/core";
export const About = () => {
  const data = {
    image: "/images/about-us.jpg",
    title: "About Us",
    description:
      "Welcome to Skilline, the revolutionary and cost-effective gamified edu platform under development. We design innovative, AI-driven training programs for industries like tech, manufacturing and other high growth sectors. Who We Are - Our aim is to be a one stop solution for rural youth, job seekers, corporates and educational institutions focusing on niche resources and skill development.",
  };
  return (
    <div className="md:pt-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
