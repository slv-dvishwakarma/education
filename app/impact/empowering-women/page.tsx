import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const EmpoweringWomen = () => {
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
            label: "Empowering Women",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Empowering Women
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/women-empowering.jpg"
              width={700}
              height={700}
              alt="Empowering Women"
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Empowering Women</Heading>
              <Paragraph>
                Achieving economic independence is at the core of our mission.
                We empower individuals and businesses to reach their full
                potential by providing the tools, resources, and opportunities
                necessary for financial self-sufficiency and growth.
              </Paragraph>

              <Paragraph>
                Our holistic approach addresses the diverse needs of our
                clients, fostering an environment where innovation and
                entrepreneurship can thrive.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>Our initiatives focus on</Heading>
              <UnorderedList>
                {[
                  "Skill Development",
                  "Entrepreneurial Support",
                  "Job Creation",
                  "Financial Literacy",
                  "Community Development",
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
              src="/impact/women-empoerment-3.jpg"
              width={700}
              height={700}
              alt="Our initiatives focus on"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpoweringWomen;
