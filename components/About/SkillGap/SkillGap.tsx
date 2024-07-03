import { ImageBox } from '@/components/core'
import React from 'react'

export const SkillGap = () => {
  return (
    <div className="md:pt-[150px] pt-[50px] md:pb-[120px]">
      <ImageBox
        data={{
          image: "/image/images/skill-gap-blocks.jpg",
          title: "Addressing Skill Gaps",
          description:
            "Traditional education often falls short in meeting market demands, leading to unemployment. Skilline bridges these gaps by offering content curated by industry experts, promoting equal opportunities, and delivering personalized, job-guaranteed training courses.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  )
}
