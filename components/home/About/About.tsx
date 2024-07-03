import React from "react";
import { ImageBox } from "@/components/core";
export const About = () => {
  const data = {
    image: "/images/about-us.jpg",
    title: "About Us",
    description:
      "Welcome to Skilline, an innovative and affordable gamified education platform currently in development. We specialize in creating cutting-edge, AI-powered training courses tailored to meet the demands of tech, manufacturing, and other high-demand sectors. Our mission is to empower rural youth, job seekers, corporate employees, and educational institutions by providing niche resources and fostering skill development.",
  };
  return (
    <div className="md:pt-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
