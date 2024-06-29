"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "../core";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const pathname = usePathname();
  const footerMenu = [
    {
      label: "Home",
      link: "",
    },
    {
      label: "About",
      link: "",
    },
    {
      label: "Blog",
      link: "",
    },
    {
      label: "Contact",
      link: "",
    },
    {
      label: "Privacy",
      link: "",
    },
    {
      label: "Cookies",
      link: "",
    },
  ];

  const social = [
    {
      label: "Facebook",
      link: "",
      icon: "facebook",
    },
    {
      label: "Linkedin",
      link: "",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      link: "",
      icon: "instagram",
    },
  ];
  return (
    <footer
      className={cn(
        " dark:bg-gray-900  ",
        pathname === "/" ? "bg-white" : "bg-gray-50"
      )}
    >
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <h2 className="text-2xl uppercase font-[900]">Skilline</h2>
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {footerMenu.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  className="md:mx-4 mx-2 font-[300] text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-balance text-[14px] leading-[28px] font-light text-[rgb(105,105,105)] tracking-[_0.4px]">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex mt-3 md:mt-0 gap-3">
            {social.map((item, index) => {
              const { icon, label, link } = item;
              return (
                <SocialIcon key={index} icon={icon} label={label} link={link} />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
