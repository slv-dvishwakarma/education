import { ImageBox } from "@/components/core";
import React from "react";

export const OurApproach = () => {
  return (
    <div className="md:pb-[100px]">
      <ImageBox
        data={{
          image: "/images/our-approach.jpg",
          title: "Our Approach",
          description:
            "With the help of AI and gamification, we offer a unique learning journey personalized to each learner's desire and need. Our platform provides high-quality bilingual education with a unique competency-driven model tailored to career experience and confidence. We are new learning technology innovators.",
          style: "style-2",
        }}
        type="style-2"
      />
    </div>
  );
};
