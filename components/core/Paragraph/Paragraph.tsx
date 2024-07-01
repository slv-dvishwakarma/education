import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-balance md:text-[18px] md:leading-[34px] text-[14px] leading-[28px] font-light text-black tracking-[_0.4px] !whitespace-normal",
        className
      )}
    >
      {children}
    </div>
  );
};
