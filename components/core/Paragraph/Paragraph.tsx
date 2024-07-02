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
        "text-balance text-[18px] leading-[34px] font-light text-black tracking-[_0.4px] !whitespace-normal",
        className
      )}
    >
      {children}
    </div>
  );
};
