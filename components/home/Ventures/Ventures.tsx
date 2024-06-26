import { Heading, TeamCard } from "@/components/core";
import Image from "next/image";
import React from "react";

export const Ventures = () => {
  const data = [
    {
      src: "/images/neelam-pal.jpeg",
      name: "Neelam Pal",
      profession: "-",
    },
    {
      src: "/images/hansi-malhotra.jpeg",
      name: "Hansi Malhotra ",
      profession: "Subject | Industry| Impact",
    },
    {
      src: "/images/monika-kulshreshtha.jpeg",
      name: "Monika Kulshreshtha",
      profession: "Australia ",
    },
    {
      src: "/images/upal-roy.jpeg",
      name: "Upal Roy ",
      profession: "Bengal ",
    },
    {
      src: "/images/raman-rajpal.jpeg",
      name: "Raman Rajpal - Haryana ",
      profession: "Manager @Amazon India ",
    },
    {
      src: "/images/naganath.jpeg",
      name: "Naganath - Tamil   ",
      profession: "UI React from USA ",
    },
    {
      src: "/images/debashish-sahoo.jpeg",
      name: "Debashish Sahoo    ",
      profession: "Assam Data Engineering ",
    },
    {
      src: "/images/ashutosh-taiwal.jpeg",
      name: "Ashutosh Taiwal     ",
      profession: "Devops Company Owner ",
    },
  ];

  return (
    <div className="bg-gray-100 py-[80px] mt-[50px] relative">
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
        <Heading className="mb-10">Ventures</Heading>
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.map((item: any, index: number) => {
            const { src, name, profession } = item;
            return (
              <TeamCard
                key={index}
                name={name}
                profession={profession}
                src={src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
