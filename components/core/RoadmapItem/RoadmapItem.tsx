import { FaCog } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiGraphBold } from "react-icons/pi";

import React from "react";
import { cn } from "@/lib/utils";
type IconType = "cog" | "rocket" | "graph";
type VariantType = "purple" | "green" | "orange";
export type RoadmapItemType = {
  year: string;
  heading: string;
  description: string;
  variant: VariantType;
  icon: IconType;
};

export const RoadmapItem = ({
  year,
  description,
  variant,
  heading,
  icon,
}: RoadmapItemType) => {
  const iconStyle: Record<VariantType, string> = {
    purple: "bg-purple-500 text-white",
    green: "bg-green-500 text-white",
    orange: "bg-orange-500 text-white",
  };

  const textStyle: Record<VariantType, string> = {
    purple: "text-purple-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  const lineStyle: Record<VariantType, string> = {
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  const Icons: Record<IconType, any> = {
    cog: FaCog,
    rocket: IoRocketSharp,
    graph: PiGraphBold,
  };

  const ItemIcon = Icons[icon];

  return (
    <div className="relative mb-6 sm:mb-0">
      <div className="md:h-[149px] md:w-auto w-[149px] relative">
        <div className="absolute w-full h-[10px] bg-gray-200 top-[85px] hidden md:inline-block"></div>
        <div className="w-max relative rotate-[-90deg] lg:rotate-0">
          <ItemIcon
            size={20}
            className={cn(
              "w-[50px] h-[50px] p-3.5 rounded-full inline-flex items-center justify-center",
              iconStyle[variant]
            )}
          />
          <span
            className={cn(
              "absolute lg:w-[10px] w-[3px] h-[80px] left-0 right-0 mx-auto",
              lineStyle[variant],
              "top-[50px]",
              "lg:border-[4px] border-white border-t-0 border-b-0  "
            )}
          />

          <span
            className={cn(
              "absolute rounded-full w-[15px] h-[15px] left-0 right-0 mx-auto",
              lineStyle[variant],
              "top-[130px]"
            )}
          />
        </div>
        <h3
          className={cn(
            "lg:pl-[70px] pl-[160px] lg:translate-y-[-45px] translate-y-[-42px] text-2xl font-bold",
            textStyle[variant]
          )}
        >
          {year}
        </h3>
      </div>
      <div className="lg:pr-[36px] pr-0 lg:mt-0 mt-[-37px] lg:pl-[5px] pl-[50px]">
        <h3 className="text-[18px]">{heading}</h3>
        <div className="text-gray-500 font-[300] mt-2  inline-block leading-[25px] text-[15px]">
          {description}
        </div>
      </div>
    </div>
  );
};
