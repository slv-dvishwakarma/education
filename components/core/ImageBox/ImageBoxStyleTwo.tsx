import { Heading } from "@/components/core/Heading";
import { Paragraph } from "@/components/core/Paragraph";
import Image from "next/image";
import React from "react";

interface ImageTextItem {
  image: string;
  title: string;
  description: string;
  style: string;
}

interface ImageTextProps {
  data: ImageTextItem;
  imageAlign: "left" | "right";
}

export const ImageBoxStyleTwo: React.FC<ImageTextProps> = ({
  data,
  imageAlign,
}: ImageTextProps) => {
  return (
    <div className="" id="about-us">
      {imageAlign === "right" ? (
        <div className="container flex-col-reverse md:flex-row xl:flex lg:flex md:flex flex flex-wrap  items-center xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] lg:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] md:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] pb-[50px] pt-[50px]">
          <div className="xl:pl-8 lg:pl-8 md:pl-8 xl:pt-0 lg:pt-0 md:pt-0 pt-8 xl:w-[35%] lg:w-[35%] md:w-[35%] w-full space-y-5">
            <Heading>{data.title}</Heading>
            <Paragraph>{data.description}</Paragraph>
          </div>
          <div className="relative xl:w-[58%] lg:w-[58%] md:w-[58%] w-full">
            <Image
              className="hidden xl:block lg:block md:block absolute xl:right-[-70px] lg:right-[-7px] md:right-[0px] bottom-[-60px] "
              src="/images/edumall-shape-01.png"
              alt={data.title}
              width={179}
              height={178}
            />
            <Image
              className="xl:h-[400px] lg:h-[400px] md:h-[400px] h-[200px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] xl:w-[85%] lg:w-[85%] md:w-[85%] w-full relative xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px] float-right"
              src={data.image}
              alt={data.title}
              width={1500}
              height={1000}
            />
          </div>
        </div>
      ) : (
        <div className="container xl:flex lg:flex md:flex flex flex-wrap  items-center xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] lg:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] md:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] pb-[50px] xl:pt-[20px] lg:pt-[20px] md:pt-[20px] pt-[50px]">
          <div className="relative xl:w-[58%] lg:w-[58%] md:w-[58%] w-full">
            <Image
              className="hidden xl:block lg:block md:block absolute xl:left-[-66px] lg:left-[-7px] md:left-[-7px] bottom-[-68px] "
              src="/images/edumall-shape-01.png"
              alt={data.title}
              width={179}
              height={178}
            />
            <Image
              className="xl:h-[400px] lg:h-[400px] md:h-[400px] h-[200px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] xl:w-[85%] lg:w-[96%] md:w-[93%] w-full relative xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px]"
              src={data.image}
              alt={data.title}
              width={1500}
              height={1000}
            />
          </div>
          <div className="xl:w-[35%] lg:w-[35%] md:w-[35%] w-full xl:pr-8 lg:pr-8 md:pr-8 pt-8 space-y-5">
            <Heading>{data.title}</Heading>
            <Paragraph>{data.description}</Paragraph>
          </div>
        </div>
      )}
    </div>
  );
};
