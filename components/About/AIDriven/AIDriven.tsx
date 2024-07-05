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
            "Our platform uses AI to provide instant, customized feedback in various Indian languages making it inclusive and accessible. The rural user can learn through video and audio learning which is a great thing of benefits over there educational experience.",
          style: "style-2",
        }}
        type="style-2"
      />
    </div>
  )
}
