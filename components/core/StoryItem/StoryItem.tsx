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
    <div className="bg-white grid grid-cols-4 rounded-xl py-4">
      <div className="w-[200px] items-center px-8 py-6 text-center flex gap-1 flex-col justify-center">
        <Image
          src={image}
          //   src="/images/profile.png"
          width={100}
          height={100}
          alt={name}
          className="rounded-full"
        />
        <div>
          <span className="w-[30px] h-[3px]  bg-gray-200 inline-block"></span>
          <h3 className="text-[14px]">{name} </h3>
          <p className="text-[14px] text-slate-500">{city}</p>
        </div>
      </div>

      <div className="col-span-3  flex items-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-gray-200 w-[1px] h-[100%] inline-block mx-10" />
          <div>
            <h3 className="mb-2">Story</h3>
            <Paragraph className="text-[15px] font-[300] leading-[30px] proxima p-0 m-0">
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
