import { ImageBox } from "@/components/core";
import React from "react";

export const OurVision = () => {
  return (
    <div className="md:pt-[150px] pt-[50px] md:pb-[120px]">
      <ImageBox
        data={{
          image: "/images/our-vision.jpg",
          title: "Our Vision",
          description:
            "To skill that one individual of the nation with an equitable opportunity - in sync to their economic, geographical, or linguistic background so as his life becomes not just a mere living life like others but adds up courage for India's needlessly growth. We Need it!! We all want to dream India in which every person gets employed by their own hard work and self-sufficient, confident industrious workforce.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  );
};
