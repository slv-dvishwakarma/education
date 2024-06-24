"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoMenuOutline } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathName = usePathname();

  const [menuStatus, setMenuStatus] = useState(false);
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <>
      <div className="bg-white sticky top-0 z-[999] bg-opacity-75 backdrop-blur-[15px]">
        <div className="container">
          <div className="flex justify-between items-center lg:py-5 py-5">
            <div>
              <h1 className="text-2xl text-primary uppercase">Skilline</h1>
            </div>
            <div className="flex lg:gap-5 items-center">
              <div className="hidden lg:flex gap-10 mr-3 items-center">
                {menu.map((item: any, index: number) => {
                  return (
                    <Link
                      href={item.link}
                      className={cn(
                        "text-gray-800 hover:text-primary",
                        pathName === item.link ? "text-primary" : ""
                      )}
                      key={index}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Button>Enquiry Now</Button>
              <div className="lg:hidden">
                <Button variant="ghost" onClick={() => setMenuStatus(true)}>
                  <IoMenuOutline size={30} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        menu={menu}
        active={menuStatus}
        toggleMenu={(prop: boolean) => setMenuStatus(prop)}
      />
    </>
  );
};
