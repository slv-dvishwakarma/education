"use client";
import React, { Fragment, useMemo } from "react";
import { blogData } from "@/components/content";
import Link from "next/link";
import { Heading, Paragraph, Tooltip } from "@/components/core";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaLink } from "react-icons/fa";

const BlogDetails = ({ params: { slug } }: any) => {
  const currentData = useMemo(() => {
    return blogData.find((item) => item.link.url == `/blogs/${slug}`);
  }, [slug]);

  function createMarkup() {
    return { __html: currentData?.content || "" };
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnInstagram = () => {
    // Instagram sharing typically needs to be done via mobile app
    alert("Please use Instagram mobile app to share this post.");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy the link"));
  };

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
            className="rounded-xl shadow-xl max-h-[500px] object-cover"
            width={1400}
            height={500}
            alt=""
          />
          <Paragraph className="px-[10%]  pt-[40px] pb-[40px]">
            <div
              className="space-y-3"
              id="blog-template"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </Paragraph>
          <div className="px-[9%] pt-[40px] pb-[40px]">
            <ul className="flex xl:w-[25%] lg:w-[25%] md:w-[35%] w-full justify-between pl-0">
              <Tooltip text="Share With Facebook">
              <li className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#486CB4] text-[white] rounded-[50%]" onClick={shareOnFacebook}>
                <FaFacebookF />
              </li></Tooltip>
              <Tooltip text="Share With Linkdin">
              <li className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#087EBB] text-[white] rounded-[50%]" onClick={shareOnLinkedIn}>
                <FaLinkedinIn />
              </li></Tooltip>
              <Tooltip text="Share With Instagram">
              <li className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex text-[white] rounded-[50%]" style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }} onClick={shareOnInstagram}>
                <FaInstagram />
              </li></Tooltip>
              <Tooltip text="Copy Link">
              <li className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#2887E1] text-[white] rounded-[50%]" onClick={copyLink}>
                <FaLink />
              </li>
              </Tooltip>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
