import { Breadcrumb, CardBox, Heading } from "@/components/core";
import { cn } from "@/lib/utils";
import React from "react";
import { blogData } from "@/components/content";

type ItemType = {
  title: string;
  description: string;
  image: string;
  author: string;
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
      <div className="container md:mt-[40px] mt-[20px] md:pb-[70px] pb-[30px]">
        <Heading className="py-5">News & Article</Heading>
        <div className={cn("py-4 grid md:grid-cols-3 grid-cols-1 gap-10")}>
          {data.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <CardBox
                key={index}
                title={title}
                description={description}
                image={image}
                author={item.author}
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
