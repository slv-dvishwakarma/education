import React from 'react'
import jsonData from "./jsonData.json"
import { ImageText, ImageWithText } from '@/components/core/ImageWithText'

export const About = () => {
  return (
    <main>
        <ImageWithText imageText={jsonData.about}/>
        <ImageText imagetextitem={jsonData.vision}/>
        <ImageText imagetextitem={jsonData.approach}/>
    </main>
  )
}
