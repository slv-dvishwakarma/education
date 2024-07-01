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
            label: "Self Learning",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Self Learning
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/selft-learing-00.jpg"
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Self-Directed Education</Heading>
              <Paragraph>
                Self learning, also known as autonomous learning or
                self-directed education, empowers individuals to take control of
                their own learning journey. It is a proactive approach where
                learners independently seek knowledge, skills, and understanding
                without direct instruction from a teacher or formal classroom
                setting.
              </Paragraph>

              <Paragraph>
                {`This method of learning is increasingly valuable in
                today's rapidly changing world, where the ability to adapt and
                acquire new knowledge independently is crucial for personal and
                professional growth.`}
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>Strategies for Effective Self Learning</Heading>

              <UnorderedList>
                {[
                  "Set Clear Goals",
                  "Utilize Diverse Resources",
                  "Create a Learning Schedule",
                  "Practice Active Learning",
                  "Join Learning Communities",
                  "Seek Feedback",
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
              src="/impact/selft-learing-01.jpg"
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
