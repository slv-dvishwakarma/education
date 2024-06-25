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
        "text-balance text-[17px] leading-[34px] font-light text-[rgb(105,105,105)] tracking-[_0.4px] mt-[15px]",
        className
      )}
    >
      {children}
    </div>
  );
};
