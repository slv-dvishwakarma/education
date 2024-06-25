import React from "react";
import { GridBox } from "../GridBox";
import Image from "next/image";
import { Heading } from "../core";

export const ImageWithText = () => {
  const imageText = {
    image: "/images/artifical- intelligence.jpg",
    title: "About Us",
    description:
      "Skilline is more than just an education platform. It's a movement aimed at transforming the landscape of education and skill development in India. We believe in the power of technology, particularly AI, to democratize access to quality education and skills. Our mission is to empower rural youth, job seekers, corporate employees, and educational institutions by providing affordable, gamified, and industry-relevant training courses. We also support policymakers in enhancing governance and scaling education policies for the betterment of society.",
  };

  return (
    <div className="container relative" id="about-us">
      <GridBox
        gap={10}
        className="xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5 items-center bg-transparent xl:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] lg:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] md:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] pt-[50px] pb-[70px] mt-10"
        columns={2}
      >
        <GridBox.GridItem columnMerge={1}>
          <Image
            className="shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] z-[1] relative"
            src={imageText.image}
            alt={imageText.title}
            width={1500}
            height={1000}
          />
          <Image
            className="hidden xl:block lg:block md:hidden absolute bottom-0 dynamic-movement left-0"
            src="/images/edumall-shape-grid-dots.png"
            alt={imageText.title}
            width={417}
            height={371}
          />
          <div className="hidden xl:block lg:block md:hidden w-[200px] h-[200px] bg-primary absolute rounded-[50%] bottom-0 dynamic-movement left-0"></div>
        </GridBox.GridItem>
        <GridBox.GridItem
          columnMerge={1}
          className="xl:pr-[50px] lg:pr-[50px] md:pr-[50px]"
        >
          <Heading>{imageText.title}</Heading>
          <p className="mt-3 text-[16px] leading-[30px] md:text-[17px] md:leading-[32px] proxima text-slate-700 text-balance">
            {imageText.description}
          </p>
        </GridBox.GridItem>
      </GridBox>
    </div>
  );
};
