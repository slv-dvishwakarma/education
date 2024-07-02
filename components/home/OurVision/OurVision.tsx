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
            "To create an India where every individual, regardless of their geographical, economic, or linguistic background, has the opportunity to acquire skills that not only secure their future but also contribute to the nation's growth. We envision a self-reliant India, powered by a skilled and confident workforce.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  );
};
