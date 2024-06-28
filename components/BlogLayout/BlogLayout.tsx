"use client";
import React, { ReactNode, useMemo } from "react";
import { useParams } from "next/navigation";
import { blogData } from "../content";
import Image from "next/image";
import { Heading, Paragraph } from "../core";
import Link from "next/link";
export const BlogLayout = ({ children }: { children: ReactNode }) => {
  const { slug } = useParams();
  const currentData = useMemo(() => {
    return blogData.find((item) => item.link.url == `/blogs/${slug}`);
  }, [slug]);

  return (
    <>
      <div className="container">
        <div className="flex py-10">
          <div className="">
            <div className="font-[300]  text-center md:text-left">
              {[
                {
                  label: "Home",
                  link: "/",
                  isActive: false,
                },
                {
                  label: "Blogs",
                  link: "/blogs",
                  isActive: false,
                },
                {
                  label: currentData?.title || "",
                  isActive: true,
                },
              ].map((item, index) => {
                if (item.isActive) {
                  return <span key={index}> {item.label}</span>;
                }
                return (
                  <>
                    <Link
                      key={index}
                      className="text-gray-500"
                      href={item.link || ""}
                    >
                      {item.label}
                    </Link>
                    <span className="pl-2 pr-2">/</span>
                  </>
                );
              })}
            </div>
            <Heading className="mt-2 mb-8">{currentData?.title}</Heading>

            <Image
              src={currentData?.image || ""}
              className="rounded-xl shadow-xl max-h-[500px] object-cover"
              width={1400}
              height={500}
              alt=""
            />
            <Paragraph className="px-[10%] space-y-8 pt-[40px] pb-[40px]">
              {children}
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};
