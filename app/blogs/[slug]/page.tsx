"use client";
import React, { Fragment, useMemo } from "react";
import { blogData } from "@/components/content";
import Link from "next/link";
import { Heading, Paragraph } from "@/components/core";
import Image from "next/image";
const BlogDetails = ({ params: { slug } }: any) => {
  const currentData = useMemo(() => {
    return blogData.find((item) => item.link.url == `/blogs/${slug}`);
  }, [slug]);

  // blockquote;

  function createMarkup() {
    return { __html: currentData?.content || "" };
  }
  return (
    <div className="container blog-details">
      <div className="flex py-10">
        <div className="">
          <div className="font-[300]">
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
          <Paragraph className="px-[10%]  pt-[40px] pb-[40px]">
            <div
              className="space-y-8"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
