import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Paragraph } from "../Paragraph";

export type IconBoxType = {
  title: string;
  description: string;
  icon: string;
  link: {
    url: string;
    target: "_blank" | "_self";
  };
  isBordered?: boolean;
};

export const IconBoxStyle1 = ({
  title,
  description,
  icon,
  link,
  isBordered,
}: IconBoxType) => {
  return (
    <div
      className={cn(
        " bg-white rounded-md p-10 hover:shadow-xl transition-all group h-full",
        isBordered ? "border" : ""
      )}
    >
      <Link
        className="flex flex-col gap-3"
        href={link.url}
        target={link.target}
      >
        <Image
          src={icon}
          width={100}
          className="w-[52px] h-[52px]"
          height={100}
          alt={title}
        />
        <h3 className="text-[17px] leading-[28px] mt-3 group-hover:text-primary">
          {title}
        </h3>
        <Paragraph className="text-[15px] text-[rgb(105,105,105)] leading-[28px] font-[300]">
          {description}
        </Paragraph>
      </Link>
    </div>
  );
};
