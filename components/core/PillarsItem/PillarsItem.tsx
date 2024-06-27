import React from "react";
import { GoGraph } from "react-icons/go";

export const PillarsItem = ({ title, description, icon, seqNumber }: any) => {
  return (
    <div className="h-full w-full flex items-start">
      <div className="w-[50px]">
        <span className="text-red-500 text-xl">{seqNumber}</span>
      </div>
      <div className="w-[50px]">
        <span className="border border-red-500 p-1 rounded-full inline-flex ">
          <span className="bg-red-500 text-sm text-white inline-block w-[10px] h-[10px]  rounded-full items-center justify-center"></span>
        </span>
      </div>
      <div className="w-[calc(100%-100px)]">
        <div className="shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-lg px-5 py-5">
          <h4 className="text-lg uppercase font-[600]">{title}</h4>
          <div className="text-sm leading-[200%] font-[300]">{description}</div>
        </div>
      </div>
    </div>
  );
};
