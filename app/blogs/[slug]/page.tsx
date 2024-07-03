"use client";
import React, { Fragment, useMemo } from "react";
import { blogData } from "@/components/content";
import Link from "next/link";
import { Heading, Paragraph, Tooltip } from "@/components/core";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogDetails = ({ params: { slug } }: any) => {
  const currentData = useMemo(() => {
    return blogData.find((item) => item.link.url == `/blogs/${slug}`);
  }, [slug]);

  function createMarkup() {
    return { __html: currentData?.content || "" };
  }

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(currentData?.title || 'Check out this blog post!');
    const image = encodeURIComponent(currentData?.image || 'URL_of_your_default_image');
  
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}&media=${image}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };


  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };


  const copyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy the link"));
  };

  return (
    <>
      <div className="container blog-details">
        <div className="flex pt-10">
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
                  <Fragment key={index}>
                    <Link className="text-gray-500" href={item.link || ""}>
                      {item.label}
                    </Link>
                    <span className="pl-2 pr-2">/</span>
                  </Fragment>
                );
              })}
            </div>
            <Heading className="mt-2 mb-8">{currentData?.title}</Heading>
            <Image
              src={currentData?.image || ""}
              className="rounded-xl shadow-xl max-h-[500px] md:w-[1301px] w-full object-cover"
              width={1400}
              height={500}
              alt=""
            />
            <Paragraph className="md:px-[10%] blog-description pt-[40px] pb-[40px]">
              <div
                className="space-y-3"
                id="blog-template"
                dangerouslySetInnerHTML={createMarkup()}
              />
            </Paragraph>
            <span className="w-full  gap-7  md:px-[10%]">Author: <strong>{currentData?.author}</strong></span>
          </div>
          
        </div>
        
      </div>
      
      <div className="">
        <div className="container">
          <ul className="flex py-[60px] w-full  gap-7  md:px-[10%]">
            <Tooltip text="Share With Facebook">
              <li
                className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#486CB4] text-[white] rounded-[50%]"
                onClick={shareOnFacebook}
              >
                <FaFacebookF />
              </li>
            </Tooltip>
            <Tooltip text="Share With Linkdin">
              <li
                className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#087EBB] text-[white] rounded-[50%]"
                onClick={shareOnLinkedIn}
              >
                <FaLinkedinIn />
              </li>
            </Tooltip>
            <Tooltip text="Share With Twitter">
              <li
                className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex text-[white] rounded-[50%] bg-[#25A4F3]"
                onClick={shareOnTwitter}
              >
                <FaXTwitter />
              </li>
            </Tooltip> 
            <Tooltip text="Copy Link">
              <li
                className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#2887E1] text-[white] rounded-[50%]"
                onClick={copyLink}
              >
                <FaLink />
              </li>
            </Tooltip>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
