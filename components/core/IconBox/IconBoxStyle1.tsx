import Image from "next/image";
import Link from "next/link";
import React from "react";

export type IconBoxType = {
  title: string;
  description: string;
  icon: string;
  link: {
    url: string;
    target: "_blank" | "_self";
  };
};

export const IconBoxStyle1 = ({
  title,
  description,
  icon,
  link,
}: IconBoxType) => {
  return (
    <div className=" bg-white rounded-md p-10 hover:shadow-xl transition-all group h-full">
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
        <div className="text-[15px] text-[rgb(105,105,105)] leading-[28px] font-[300]">
          {description}
        </div>
      </Link>
    </div>
  );
};
