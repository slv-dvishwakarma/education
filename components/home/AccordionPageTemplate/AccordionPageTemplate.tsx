import { AccordionTemplate, Heading, Paragraph } from "@/components/core";
import { GridBox } from "@/components/core/GridBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { RiQuestionMark } from "react-icons/ri";

export const AccordionPageTemplate = () => {
  const data = {
    title: "Any Question? We have Answers!",
    label: "Don't find your answer here? just send us a message for any query.",
    Link: {
      label: "Contact Us",
      url: "/contact-us",
      target: "_self",
    },
    faq: [
      {
        question: "What is Skilline's primary mission?",
        answer:
          "Skilline aims to democratize education and empower the workforce through AI-driven, job-guaranteed training in high-demand sectors, supporting Atma-Nirbhar Bharat's vision.",
      },
      {
        question: "How does Skilline contribute to economic growth?",
        answer:
          "Skilline enhances economic self-reliance by providing scalable, affordable education solutions that match market demands and foster entrepreneurship.",
      },
      {
        question: "What sets Skilline apart from other educational platforms?",
        answer:
          "Skilline integrates gamification to engage learners and empower educators, ensuring adaptive learning experiences tailored to individual and industry needs, with a 100% job guarantee.",
      },
      {
        question: "How does Skilline support government initiatives?",
        answer:
          "Skilline collaborates with governments to enhance policy execution and governance through data-driven insights and stakeholder coordination via our platform's dashboard.",
      },
      {
        question: "What courses and modules does Skilline offer?",
        answer:
          "Skilline offers modules in Vedic Education, Cleanliness Awareness, Government Policy, and Responsible Citizen Awareness. Our platform's first-year goal is to launch interactive training courses focusing on DSA, Python, Java, React, Angular, Test Automation, DevOps (GCP/AWS/Azure), AI/ML, professional development, micro-credentials. In year two, we expand to rural areas, integrate AI into governance and education, and focus on Manufacturing Hubs (e.g., Electronics) to enhance job opportunities. By year three, Skilline plans to establish a self-sustaining indigenous university, preparing skilled professionals for high-impact roles with global leaders like Bill Gates and Elon Musk.",
      },
      {
        question:
          "How does Skilline ensure accessibility across diverse demographics?",
        answer:
          "Skilline operates as a socially controlled platform, facilitating contributions from all levels of government and enabling visibility and coordination among stakeholders.",
      },
      {
        question: "What role does AI play in Skilline's platform?",
        answer:
          "AI powers Skilline's personalized learning pathways, ensuring skill development aligns with current job market needs and enhances learning outcomes.",
      },
      {
        question: "Why does Skilline need Gen AI servers?",
        answer:
          "Gen AI servers empower Skilline's AI-driven platform to create personalized learning pathways, facilitate scalable knowledge analytics, and deliver audio and video learning benefits to rural areas.",
      },
      {
        question: "How does Skilline measure success and impact?",
        answer:
          "Skilline tracks metrics such as Number of signups for upskilling, employment rates, number of self employment, learner satisfaction, and policy outcomes to continually refine and enhance our educational offerings and societal impact. Projections for success Measure",
      },
      {
        question:
          "How can investors and stakeholders get involved with Skilline?",
        answer:
          "Investors and stakeholders can partner with Skilline to expand our reach, enhance technological capabilities, and scale operations to empower more individuals and communities.",
      },
      {
        question: "What is Skilline's vision for the future?",
        answer:
          "Skilline envisions a future where every individual in Bharat has access to innovative, personalized education that unlocks their full potential, contributing to a prosperous and self-sufficient nation.",
      },
      {
        question: "How do you protect my data?",
        answer:
          "We take data security very seriously. We have robust measures in place to protect personal information & data, and we're compliant with all relevant data protection regulations.",
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        <GridBox
          columns={2}
          gap={10}
          className="items-start xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4"
        >
          <GridBox.GridItem
            columnMerge={1}
            className="space-y-4 md:sticky md:top-[100px]"
          >
            <div className="bg-[#e9ecfb] w-[60px] h-[60px] hidden md:inline-flex items-center justify-center rounded-full ">
              <RiQuestionMark className="text-[#3750e0]" size={30} />
            </div>
            <Heading>{data.title}</Heading>
            <Paragraph className="xl:w-6/12 lg:w-full md:w-full w-full">
              {data.label}
            </Paragraph>
            <Button asChild={true}>
              <Link href={data.Link.url} target={data.Link.target}>
                {data.Link.label}
              </Link>
            </Button>
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={1}>
            <AccordionTemplate content={data.faq} />
          </GridBox.GridItem>
        </GridBox>
      </div>
    </div>
  );
};
