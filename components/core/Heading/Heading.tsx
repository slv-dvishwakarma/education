import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const Heading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-[20px] leading-[29px] text-balance md:text-[40px] md:leading-[50px] text-[rgb(37,37,37)] font-[500]",
        className
      )}
    >
      {children}
    </h2>
  );
};
