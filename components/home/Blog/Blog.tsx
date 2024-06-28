import { blogData } from "@/components/content";
import { CardBox, Heading } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: { url: string; target: "_blank" | "_self" };
};

export const Blog = () => {
  const data: ItemType[] = blogData as any;
  return (
    <div className="py-[70px] bg-[#F8F8F8]">
      <div className="container space-y-10">
        <Heading>News & Article</Heading>
        <div className="grid-item xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1 xl:flex lg:flex md:flex block gap-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
          {data.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <CardBox
                key={index}
                title={title}
                description={description}
                image={image}
                link={link}
              />
            );
          })}
        </div>
        <div className="text-center flex">
          <Link
            href="/blogs"
            className=" flex items-center gap-3 text-center m-auto"
          >
            <span>View All Posts</span>{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
