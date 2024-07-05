import { Heading, Paragraph, TeamCard } from "@/components/core";
import Image from "next/image";
import React from "react";

export const Ventures = () => {
  const data = [
    {
      src: "/images/neelam-pal.jpeg",
      name: "Neelam Pal",
      profession: "Test Automation Architect",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/palneelam/",
        },
      ],
    },
    {
      src: "/images/hansi-malhotra.jpeg",
      name: "Hansi Malhotra ",
      profession: "Financial education, investing in India and climate/fintech",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/hansimehrotra/",
        },
      ],
    },
    {
      src: "/images/monika-kulshreshtha.jpeg",
      name: "Monika Kulshreshtha",
      profession:
        "Serial Entrepreneur | IT Consultant | Growth Hacker | Mentor ",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/monikakulshrestha/",
        },
      ],
    },
    {
      src: "/images/upal-roy.jpeg",
      name: "Upal Roy ",
      profession: "AI/ML evangelist EGN STR EXP",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/upalroy/",
        },
      ],
    },
    {
      src: "/images/raman-rajpal.jpeg",
      name: "Raman Rajpal - Haryana ",
      profession: "Manager @Amazon India ",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/raman-rajpal-a8bb2458/",
        },
      ],
    },
    {
      src: "/images/naganath.jpeg",
      name: "Naganath - Tamil   ",
      profession: "UI React from USA ",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "",
        },
      ],
    },
    {
      src: "/images/naganath.jpeg",
      name: "Debashish Sahoo    ",
      profession: "Assam Data Engineering ",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/debasshis/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      src: "/images/ashutosh-taiwal.jpeg",
      name: "Ashutosh Taiwal     ",
      profession: "Cloud Architect  ",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/ashutaiwal/",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 md:py-[80px] py-[50px]  relative">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/edumall-shape-01.png"
          width={300}
          height={300}
          className="opacity-30 w-[300px] absolute left-0 bottom-0"
          alt=""
        />
      </div>
      <div className="container relative">
        <Heading className="mb-5 text-center">Team at Skilline</Heading>
        <Paragraph className="text-center mb-10 md:px-10">
          {`The heart beats to the rhythm set by a team that runs with us into the future. Together, our team of experts brings with them more than 200 years of combined experience in a variety of areas and are dedicated to achieving excellent outcomes for our clients. Our team professorialists alongside actual work experience on every deal. Type - The variety of capabilities excellent to meet your needs.`}
        </Paragraph>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 mt-3">
          {data.map((item: any, index: number) => {
            const { src, name, profession, social } = item;
            return (
              <TeamCard
                key={index}
                name={name}
                profession={profession}
                src={src}
                social={social}
                type="style-2"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
