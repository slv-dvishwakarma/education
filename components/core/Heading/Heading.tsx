import React, { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-[20px] leading-[29px] md:text-[40px] md:leading-[40px] text-[rgb(37,37,37)] font-[500]">
      {children}
    </h2>
  );
};
