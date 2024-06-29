import { Paragraph } from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "Our Guiding Principle",
    description:
      "“Skilling, reskilling, and upskilling, focusing on the multidimensional approach to make our youth more competitive, is the biggest need of the hour. These endeavours are aimed at making the youngsters flexible and adaptable in the current fast-changing job market.”",
    image: "/images/Narendra-modis.png",
  };

  return (
    <div className="bg-gray-100 md:my-[100px] relative xl:pt-0 lg:pt-0 md:pt-0 pt-[50px]">
      <div className="container ">
        <div className="flex flex-wrap items-center">
          <div className="space-y-9 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full text-center">
            <h2 className="text-[30px] leading-[29px] md:text-[50px] md:leading-[40px]  font-[500]">
              {data.title}
            </h2>
            <Paragraph className="md:text-[20px] text-[15px] leading-[28px] md:leading-[34px] font-light  tracking-[_0.4px]">
              {data.description}
            </Paragraph>
            <Button asChild={true}>
              <Link href="/challenges-and-strategies">Read More</Link>
            </Button>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex">
            <Image
              className="float-left relative z-[1] pt-10 w-[300px] mx-auto"
              // src={data.image}
              src={"/images/vission.png"}
              alt={data.title}
              width={1200}
              height={894}
            />
            <Image
              className="xl:block lg:block md:block hidden absolute w-[30%] right-0"
              src="/images/dotted-wave.png"
              alt={data.title}
              width={1200}
              height={894}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
