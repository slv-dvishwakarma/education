import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const SelfLearning = () => {
  return (
    <>
      <Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "Impact",
            link: "/impact",
          },
          {
            label: "Economic Independence",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Economic Independence
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/economic-independence-0.jpg"
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Economic Independence</Heading>
              <Paragraph>
                Economic independence is the state of having sufficient personal
                resources to live without financial assistance. This crucial
                aspect of life empowers individuals and communities to make
                choices that lead to sustainable development, improved quality
                of life, and overall well-being.
              </Paragraph>

              <Paragraph>
                Achieving economic independence involves various factors,
                including education, employment opportunities, financial
                literacy, and supportive policies.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>The Importance of Economic Independence</Heading>
              <UnorderedList>
                {[
                  "Personal Freedom and Security",
                  "Improved Quality of Life",
                  "Empowerment and Confidence",
                  "Social and Economic Contributions",
                ].map((item: string, index: number) => {
                  return (
                    <UnorderedList.Item key={index}>{item}</UnorderedList.Item>
                  );
                })}
              </UnorderedList>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/economic-independence.jpg"
              width={700}
              height={700}
              alt="The Importance of Economic Independence"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfLearning;
