import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const EnhancePersonalSkills = () => {
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
            label: "Enhance Personal Skills",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Enhance Personal Skills
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/enhance-personal-skills-01.jpg"
              width={700}
              height={700}
              alt="Master Your Personal Skillset"
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Master Your Personal Skillset</Heading>
              <Paragraph>
                {`In today's competitive world, enhancing personal skills is not
                just an advantage; it's a necessity. Whether you're aiming for
                career advancement, personal growth, or improved social
                interactions, developing your skills can open doors to new
                opportunities and a more fulfilling life.`}
              </Paragraph>

              <Paragraph>
                The rapidly evolving job market demands a versatile skill set
                that goes beyond technical expertise, emphasizing the importance
                of adaptability and continuous learning. Personal skills such as
                effective communication, emotional intelligence, and
                problem-solving not only make you a valuable asset in
                professional settings but also enrich your personal
                relationships and overall well-being.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>Steps to Enhance Personal Skills</Heading>
              <UnorderedList>
                {[
                  "Identify Your Strengths and Weaknesses",
                  "Set Clear Goals",
                  "Pursue Continuous Learning",
                  "Practice, Practice, Practice",
                  "Seek Feedback and Mentorship",
                  "Embrace Challenges and Step Out of Your Comfort Zone",
                  "Cultivate Soft Skills",
                  "Reflect and Adjust",
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
              src="/impact/enhance-personal-skills-02.jpg"
              width={700}
              height={700}
              alt="Steps to Enhance Personal Skills"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancePersonalSkills;
