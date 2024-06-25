import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { Paragraph } from "../Paragraph";
import Link from "next/link";

export type StoryItemtype = {
  name: string;
  city: string;
  image: string;
  story: string;
  link: {
    label: string;
    url: string;
    target: "_self" | "_blank";
  };
};

export const StoryItem = ({
  name,
  city,
  image,
  story,
  link,
}: StoryItemtype) => {
  return (
    <div className="bg-white grid md:grid-cols-4 grid-cols-1 rounded-xl py-4">
      <div className="md:w-[200px] w-full items-center px-8 py-6 md:text-center flex gap-4 md:gap-1 flex-fow md:flex-col md:justify-center ">
        <Image
          src={image}
          //   src="/images/profile.png"
          width={100}
          height={100}
          alt={name}
          className="rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
        />
        <div>
          <span className="w-[30px] h-[3px] hidden  bg-gray-200 md:inline-block"></span>
          <h3 className="text-[14px] ">{name} </h3>
          <p className="text-[14px] text-slate-500">{city}</p>
        </div>
      </div>

      <div className="md:col-span-3  flex items-center">
        <div className="w-full h-full flex items-center justify-center flex-col md:flex-row px-10 md:px-0">
          <div className="bg-gray-200 w-full h-[1px] md:w-[1px] md:h-[100%] inline-block mx-10" />
          <div className="pr-5">
            <h3 className="mb-2">Story</h3>
            <Paragraph className="text-[15px] font-[300] leading-[30px] proxima p-0 m-0 line-clamp-3 md:line-clamp-4 ">
              {story}
            </Paragraph>
            <div className="py-6 border-r-0 border-b-0   w-full">
              <Link
                href={link.url}
                target={link.target}
                className="bg-gray-900 text-white px-4 py-2 text-sm rounded-md"
              >
                {link.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
