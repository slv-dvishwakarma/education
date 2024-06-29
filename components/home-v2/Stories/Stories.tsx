"use client";
import {
  Paragraph,
  StoryItem,
  Heading,
  type StoryItemtype,
} from "@/components/core";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  EmblaOptionsType,
} from "@/components/ui/carousel";

import React, { useState } from "react";

export const Stories = () => {
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
  const data: StoryItemtype[] = [
    {
      name: "Maharaju",
      city: "Hyderabad",
      image: "/images/profile.png",
      story:
        "Maharaju was working with Genpact and was in operations, data entry. With our offline program he is now tripled his salary in a year and a efficient react developer.",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
    {
      name: "Kishore ",
      city: "Andhra Pradesh",
      image: "/images/profile.png",
      story:
        "Kishore was from Andhra, pass-out with 2 years gap, working with Mindmaster Singapore in operations job as he is not meant for programming. Pass-outs got Job working for Mindmaster Singapore",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
    {
      name: "Avinesh  ",
      city: "Hyderabad",
      image: "/images/profile.png",
      story:
        "8 years of gap, not meant for programming skilled and working in operations job in Singapore ",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
    {
      name: "Sonu",
      city: "Indore",
      image: "/images/profile.png",
      story:
        "Son of a labour, was not able to complete his degree. Working in Indore in Php HTML. Now he is full stack developer and created proprietary state of the art document processing modules matching international standards and best software products using cutting edge Next JS ",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
    {
      name: "Dilip",
      city: "Indore",
      image: "/images/profile.png",
      story:
        "Same as Sonu, his colleague, working on primitive technology now upskilled and groomed as one of the industry best.",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
    {
      name: "Deepti",
      city: "Hyderabad",
      image: "/images/profile.png",
      story:
        "10 years gaps after motherhood from underconfident to a confident python developer. 	",
      link: {
        label: "Read more",
        url: "/#",
        target: "_self",
      },
      id: "",
    },
  ];
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="container bg-[#fae5d1] md:rounded-xl md:my-[80px]">
      <div className="pt-10 md:px-10">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:w-[50%] w-full pb-10">
            <Heading className="mb-5">Stories</Heading>
            <Paragraph>
              {`Skilline revolutionizes Bharat's education with affordable, AI-driven,
          job-guaranteed courses in technology and high-demand sectors,
          empowering learners and fostering national skill development.`}
            </Paragraph>
          </div>
          <div className="md:w-[50%] w-full relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-full "
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="-mt-1 h-[400px]">
                {data.map((item, index) => {
                  const { name, city, image, story, link } = item;
                  return (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1 mb-4">
                        <StoryItem
                          city={city}
                          image={image}
                          link={link}
                          name={name}
                          story={story}
                          id={item.id}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="absolute hidden md:flex flex-col right-[-30px]  items-center justify-center h-full top-0 ml-[-120px] gap-2 mt-[-20px]">
                {/* <CarouselNext className="relative -rotate-90" /> */}
                <div className="flex flex-col text-slate-500 text-xs py-2 items-center justify-center w-full">
                  <span>{current}</span> <span>/</span> <span>{count}</span>
                </div>
                {/* <CarouselPrevious className="relative -rotate-90" /> */}
              </div>
            </Carousel>
            <div className="pt-1 h-[40%] w-full bg-gradient-to-t  from-[#fae5d1]  to-transparent bottom-0 left-0 absolute hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
