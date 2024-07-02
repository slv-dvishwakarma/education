import { Heading } from "@/components/core";
import { ContactIconBox } from "@/components/core/ContactIconBox";
import React from "react";

export const HomeContactUs = () => {
  return (
    <div className="container md:pt-5 pb-[50px]">
      <Heading className="text-center">Contact us</Heading>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10">
        <ContactIconBox title="Phone Number" icon="phone">
          (+91) xxxx xxx xxx
        </ContactIconBox>
        <ContactIconBox title="Our Location" icon="map">
          99 S.t Jomblo Park Pekanbaru 28292. Indonesia
        </ContactIconBox>

        <ContactIconBox title="Email Address" icon="email">
          info@skilline.ai
        </ContactIconBox>
      </div>
    </div>
  );
};
