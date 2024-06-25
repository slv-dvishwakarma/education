import React from "react";
import Image from "next/image";
import { GridBox } from "@/components/core/GridBox";
import { Heading } from "@/components/core/Heading/Heading";
import { Paragraph } from "@/components/core/Paragraph";

interface ImageWithTextItem {
  image: string;
  title: string;
  description: string;
}

interface ImageWithTextProps {
  data: ImageWithTextItem;
  imageAlign?: "left" | "right";
}

export const ImageBoxStyleOne = ({ data }: ImageWithTextProps) => {
  return (
    <div className="relative" id="about-us">
      <GridBox
        gap={10}
        className="container  xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5 items-center xl:bg-transparent lg:bg-transparent md:bg-[#F8F8F8] bg-[#F8F8F8]  xl:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] lg:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] md:bg-[linear-gradient(90deg,#FFFFFF00_30%,#F8F8F8_30%)] pt-[50px] pb-[70px] mt-10"
        columns={2}
      >
        <GridBox.GridItem columnMerge={1} className="relative">
          <Image
            className="shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] z-[1] relative"
            src={data.image}
            alt={data.title}
            width={1500}
            height={1000}
          />
          <Image
            className="hidden xl:block lg:block md:block absolute xl:left-[-66px] lg:left-[-7px] md:left-[-7px] bottom-[-68px] "
            src="/images/edumall-shape-grid-dots.png"
            alt={data.title}
            width={417}
            height={371}
          />
          <div className="hidden xl:block lg:block md:block w-[200px] h-[200px] bg-primary absolute rounded-[50%] xl:left-[-66px] lg:left-[-7px] md:left-[-7px] bottom-[-68px]"></div>
        </GridBox.GridItem>
        <GridBox.GridItem
          columnMerge={1}
          className="xl:px-px-[30px] lg:px-[30px] md:px-[30px]"
        >
          <Heading>{data.title}</Heading>
          <Paragraph>{data.description}</Paragraph>
        </GridBox.GridItem>
      </GridBox>
    </div>
  );
};