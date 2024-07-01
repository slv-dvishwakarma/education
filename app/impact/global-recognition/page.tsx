import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const GlobalRecognition = () => {
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
            label: "Global Recognition",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Global Recognition
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/global-recognition-2.jpg"
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Global Recognition</Heading>

              <Paragraph>
                Our skilled workforce has consistently delivered exceptional
                results for international clients, demonstrating our commitment
                to excellence and innovation. We have optimized operations and
                reduced costs for esteemed companies such as Mindmaster
                Singapore and XULifestyle, showcasing our ability to understand
                and meet the unique needs of diverse markets.
              </Paragraph>

              <Paragraph>
                At the heart of our success is a dedicated team of professionals
                who bring expertise, creativity, and a problem-solving mindset
                to every project. By leveraging cutting-edge technologies and
                industry best practices, we ensure our clients achieve their
                business goals efficiently and effectively.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Paragraph>
                Our collaboration with Mindmaster Singapore has resulted in
                streamlined processes and significant cost savings, enabling
                them to enhance their competitive edge in the market. Similarly,
                our partnership with XULifestyle has driven operational
                efficiencies, allowing them to focus on their core business
                objectives and deliver superior value to their customers.
              </Paragraph>
              <Paragraph>
                We take pride in our global recognition and remain committed to
                delivering world-class solutions that drive growth and success
                for our clients around the world.
              </Paragraph>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/global-recognition-3.jpg"
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

export default GlobalRecognition;
