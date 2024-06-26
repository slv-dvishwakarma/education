import React from "react";
import { ImageBox } from "@/components/core";
export const About = () => {
  const data = {
    image: "/images/about-us.jpg",
    title: "About Us",
    description:
      "Skilline is more than just an education platform. It's a movement aimed at transforming the landscape of education and skill development in India. We believe in the power of technology, particularly AI, to democratize access to quality education and skills. Our mission is to empower rural youth, job seekers, corporate employees, and educational institutions by providing affordable, gamified, and industry-relevant training courses. We also support policymakers in enhancing governance and scaling education policies for the betterment of society.",
  };
  return <ImageBox data={data} type="style-1" />;
};
