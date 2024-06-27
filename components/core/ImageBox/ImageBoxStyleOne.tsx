"use client";
import React from "react";
import Image from "next/image";
import { GridBox } from "@/components/core/GridBox";
import { Heading } from "@/components/core/Heading/Heading";
import { Paragraph } from "@/components/core/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonItem {
  label: string;
  links: string;
  target: "_blank" | "_self";
}

interface ImageWithTextItem {
  image: string;
  title: string;
  description: string;
  button?: ButtonItem;
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
        className={cn(
          "container  xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5 items-center xl:bg-transparent lg:bg-transparent pt-[50px] pb-[70px] mt-10"
        )}
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
          className="xl:px-px-[30px] lg:px-[30px] md:px-[30px] space-y-5"
        >
          <Heading>{data.title}</Heading>
          <Paragraph>{data.description}</Paragraph>

          {data.button && (
            <Link
              href={data.button.links}
              target={data.button.target}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-white shadow hover:bg-primary md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[13px] md:text-[15px]"
            >
              {data.button.label}
            </Link>
          )}
        </GridBox.GridItem>
      </GridBox>
    </div>
  );
};
