import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TeamCardType } from "./TeamCard";
import { Card } from "@/components/ui/card";
import { Paragraph } from "../Paragraph";

export const TeamCardStyleTwo = ({
  src,
  name,
  profession,
  social,
}: TeamCardType) => {
  return (
    <div className="bg-white ">
      <div className="flex flex-col justify-between h-full">
        <div className="relative overflow-hidden ">
          <div className="relative flex justify-center pt-10">
            <Image
              src={src}
              alt="name"
              width={301}
              height={368}
              className="rounded-full w-[150px]"
            />
          </div>
          <div className="text-center mt-5 space-y-2 px-4">
            <h3 className="text-[22px] font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <Paragraph className="!leading-7">{profession}</Paragraph>
          </div>
        </div>

        <div className="border flex justify-between border-l-0 border-r-0 border-b-0 border-slate-100 px-3 py-3 mt-3">
          <div className="text-md text-slate-500 font-[300]">
            Experience : <span className="text-black font-[500]">3+ Years</span>
          </div>
          <Link
            href={social?.[0].link || "/"}
            target="_blank"
            className="   text-black  "
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
