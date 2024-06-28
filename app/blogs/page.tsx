import { Breadcrumb, CardBox, Heading } from "@/components/core";
import { cn } from "@/lib/utils";
import React from "react";
import { blogData } from "@/components/content";

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: { url: string; target: "_blank" | "_self" };
  content?: string;
};

const Blog = () => {
  const data: any = blogData;
  return (
    <div>
      <Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "Blog",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Blog
      </Breadcrumb>
      <div className="container pb-[70px]">
        <Heading className="py-5">News & Article</Heading>
        <div className={cn("py-4 grid grid-cols-3 gap-10")}>
          {data.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <CardBox
                key={index}
                title={title}
                description={description}
                image={image}
                link={link}
                isFeatured={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
