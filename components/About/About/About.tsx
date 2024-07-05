import React from "react";
import { ImageBox } from "@/components/core";
export const About = () => {
  const data = {
    image: "/images/about-us.jpg",
    title: "About Us",
    description:
      "Hi and welcome to Skilline: a new, entertaining, and low-cost method of learning by the company still under construction. Our products are therefore based on developing new training programmes that incorporate the use of artificial intelligence to meet various needs of the IT, manufacturing and all the related industries. Therefore, the goal entails reaching the rural young people, the unemployed, those employed in the several firms, and several institutions of learning with little or specialized in general education in order to help them obtain the right tools required to improve on their skills.",
  };
  return (
    <div className="md:pt-10">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
