import { Paragraph } from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "Our Guiding Principle",
    description: "A total skilling, reskilling, and upskilling with a multifaceted approach to make our youth more competitive is the topmost need of today's time. The initiatives are part of the joint goal to prepare young people for an agile and uncertain future job market.",
    image: "/images/5.png",
  };

  return (
    <div className="bg-gray-100 md:my-[100px] relative xl:pt-0 lg:pt-0 md:pt-0 pt-[50px]">
      <div className="container ">
        <div className="flex flex-wrap items-center">
          <div className="space-y-9 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full text-center">
            <h2 className="text-[30px] leading-[29px] md:text-[50px] md:leading-[40px]  font-[500]">
              {data.title}
            </h2>
            <Paragraph className=" font-light  tracking-[_0.4px]">
              {data.description}
            </Paragraph>
            <Button asChild={true}>
              <Link href="/our-guiding-principle">Read More</Link>
            </Button>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex xl:pb-0 lg:pb-0 md:pb-0 pb-10">
            <Image
              className="xl:block lg:block md:block hidden absolute w-[30%] right-0"
              src="/images/dotted-wave.png"
              alt={data.title}
              width={1200}
              height={894}
            />
            <Image
              className="float-left relative  pt-10 md:w-[500px] mx-auto w-[50%]"
              // src={data.image}
              src={"/images/5.png"}
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
