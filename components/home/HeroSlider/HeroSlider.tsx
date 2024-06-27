"use client";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
type SliderItemType = {
  preTitle: string;
  title: string;
  description: string;
  button?: {
    label: string;
    links: string;
    target: "_blank" | "_self";
  };
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  EmblaOptionsType,
} from "@/components/ui/carousel";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const HeroSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const OPTIONS: EmblaOptionsType = { loop: true };

  const sliderData: SliderItemType[] = [
    {
      preTitle: "Envisioning the future",
      title: "Empowering India's Future",
      description: `Unlocking Potential, Empowering Dreams. Join the Skilline Revolution.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-1.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "AI-Driven Education",
      description: `Where AI Meets Education, Creating Opportunities for All.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-2.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Industry-Ready Skills",
      description: `Bridging the Skill Gap, Empowering India's Workforce.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-3.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Cultural & Policy Awareness",
      description: `Nurturing Minds, Building a Better India.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-4.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
  ];

  const redirect = (otp: {
    label: string;
    href: string;
    target: "_blank" | "_self";
  }) => {};

  return (
    <div className="w-full inline-block">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={OPTIONS}
      >
        <CarouselContent>
          {sliderData.map((item: SliderItemType, index: number) => {
            const { preTitle, title, description, button, image } = item;
            return (
              <CarouselItem key={index}>
                <div className="md:h-[600px] md:pb-[80px] h-[500px] bg-gradient-to-b  from-gray-50 via-white to-gray-100 flex items-center py-10 md:py-0">
                  <div className="container">
                    <div className="flex justify-between md:flex-row flex-col gap-10 md:gap-0 items-center">
                      <div className="md:w-[40%] px-5 md:px-0 md:text-left text-center flex flex-col gap-5 md:items-start items-center">
                        <h3 className="proxima uppercase text-[13px] tracking-[5px] leading-[26px] text-gray-400">
                          {preTitle}
                        </h3>
                        <h2 className="md:text-[45px] leading-[35px] text-[30px] font-[600]  md:leading-[55px] text-slate-800 ">
                          {title}
                        </h2>
                        <div className="text-[15px] leading-[28px] md:text-[17px] md:leading-[32px] proxima text-slate-700 text-balance">
                          {description}
                        </div>
                        {button ? (
                          <Button
                            onClick={() =>
                              redirect({
                                label: button.label,
                                href: button.links,
                                target: button.target,
                              })
                            }
                            type="button"
                          >
                            {button.label}
                          </Button>
                        ) : null}
                      </div>
                      <div className="flex justify-center relative">
                        <Image
                          src="/images/edumall-shape-grid-dots.png"
                          width={400}
                          height={400}
                          alt=""
                          className="absolute left-[-30%] bottom-[-20%]"
                        />
                        <Image
                          src={image.src}
                          width={image.width}
                          height={image.height}
                          alt={image.alt}
                          className="relative md:w-auto md:h-auto w-[80%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="md:absolute py-3 md:py-0 w-full md:mt-[-50px] ">
          <div className="container ">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 font-[500] text-slate-500 text-[15px]">
                <span className="text-slate-900">{`${
                  current < 9 ? "0" : ""
                }${current}`}</span>
                <span>|</span>
                <span>{`${count < 9 ? "0" : ""}${count}`}</span>
              </div>
              <div className="gap-2 hidden md:flex">
                {sliderData.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "h-1 w-[50px] ",
                        current === index + 1 ? "bg-gray-900" : "bg-gray-200"
                      )}
                    ></div>
                  );
                })}
              </div>
              <div className="flex  gap-4 justify-end">
                <CarouselPrevious className="relative m-0 " />
                <CarouselNext className="relative m-0" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
