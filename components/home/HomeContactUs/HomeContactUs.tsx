import { Heading } from "@/components/core";
import { ContactIconBox } from "@/components/core/ContactIconBox";
import Link from "next/link";
import React from "react";

export const HomeContactUs = () => {
  return (
    <div className="container md:pt-5 pb-[50px]">
      <Heading className="text-center">Contact us</Heading>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-10 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
        <div className="flex flex-col gap-5">
        <ContactIconBox title="Phone Number" icon="phone">
          (+91) xxxx xxx xxx
        </ContactIconBox>
        <ContactIconBox title="Email Address" icon="email">
          <Link href="mailto:info@skilline.ai">info@skilline.ai</Link>
        </ContactIconBox>
        </div>
        <ContactIconBox title="Our Location" icon="map">
          594, Road No. 34, Survey Of India Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081
        </ContactIconBox>
      </div>
    </div>
  );
};
