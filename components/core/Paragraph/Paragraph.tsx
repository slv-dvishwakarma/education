import React, { ReactNode } from "react";

export const Paragraph = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-balance text-[17px] leading-[34px] font-light text-[rgb(105,105,105)] tracking-[_0.4px] mt-[15px]">
      {children}
    </div>
  );
};
