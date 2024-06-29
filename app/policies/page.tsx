import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import { Pillars } from "@/components/home-v2";
import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Policies = () => {
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
            label: "Policies",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Policies
      </Breadcrumb>
      <div className="container">
        <div className="flex flex-col md:flex-row md:py-[80px] py-[50px]">
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/policy-2.jpg"
              width={1000}
              height={1000}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="space-y-6 mt-5 md:mt-0 md:pl-10">
              <Heading className="">Government Policies</Heading>
              <Paragraph className="!whitespace-normal">
                Here we need to connect the dots and mention how the effort is
                aligning with the Government policies and intiative{" "}
              </Paragraph>
              <Paragraph className="!whitespace-normal">
                Skilline aligns with the PM’s Atma-Nirbhar Bharat, Skill India
                Digital, NSDC campaigns, and the IndiaAI Mission. Our
                cutting-edge courses are planned to adhere to government board
                curricula and fully compliant.
              </Paragraph>
              <Paragraph className="!whitespace-normal">
                Based on results from our offline pilot courses, individuals not
                only have better placement opportunities but also demonstrate
                improved skills such as enhanced communication, critical
                thinking, problem-solving abilities, adaptability to change,
                better performance, technical proficiency, and increased
                self-confidence.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <Pillars />
      <div className="container ">
        <div className="md:text-center space-y-5 md:pt-[60px] md:px-[10%]">
          <Heading className="">Empower Skill India</Heading>
          <Paragraph className="!whitespace-normal">
            {`Empower Skill India seeks to bridge the skill gap with a more
                organized, multilingual, and AI-powered approach. By leveraging
                AI, we offer personalized, real-time learning in multiple
                languages, ensuring accessibility for all. This initiative aims
                to equip India's workforce with essential skills for the digital
                age, enhancing employability and fostering a competitive
                economy.`}
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row pt-[20px] pb-[80px] items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/empower-inda.webp"
              width={1000}
              height={1000}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="space-y-6 mt-5 md:pt-0 md:pl-10">
              <h4 className="font-[600] text-[30px]">Benefits </h4>

              <UnorderedList>
                <UnorderedList.Item>
                  Corporate and Skilled Worker
                </UnorderedList.Item>

                <UnorderedList.Item>
                  Platform for offline training and monitoring
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Facilitate Teachers and Organise Training process
                </UnorderedList.Item>

                <UnorderedList.Item>
                  In demand skills and youth
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Skilled assessed pool of workers in Manufacturing
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Quality Education and Kids
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Quality Education and Kids
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Multi lingual, Rural , In general
                </UnorderedList.Item>
              </UnorderedList>
              {/* <div className="space-y-5 text-slate-600">
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Corporate and Skilled Worker
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Platform for offline training and monitoring
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Facilitate Teachers and Organise Training process
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  In demand skills and youth
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Skilled assessed pool of workers in Manufacturing
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Quality Education and Kids
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Quality Education and Kids
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Multi lingual, Rural , In general
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
