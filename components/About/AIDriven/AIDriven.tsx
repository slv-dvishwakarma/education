import { ImageBox } from '@/components/core'
import React from 'react'

export const AIDriven = () => {
  return (
    <div className="md:pb-[100px]">
      <ImageBox
        data={{
          image: "/image/images/AI_Big Data.jpg",
          title: "AI-Driven Learning Experience",
          description:
            "Our platform utilizes AI to provide real-time, personalized feedback in multiple Indian languages, ensuring inclusivity and accessibility. Rural users benefit from video and audio learning options, enhancing their educational experience.",
          style: "style-2",
        }}
        type="style-2"
      />
    </div>
  )
}
