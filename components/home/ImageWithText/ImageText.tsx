import { GridBox } from '@/components/core/GridBox'
import React from 'react'


export const ImageText = () => {

    const imageText = [
        {
            image: "",
            title: "",
            description: "",
            order: 2
        },
        {
            image: "",
            title: "",
            description: "",
            order: 1
        }
    ]

  return (
    <div className='ImageText container'>
        {imageText.map((item, index) => (
            <GridBox key={index} columns={3}>
                <GridBox.GridItem columnMerge={2} className={`order-${item.order}`}>
                    image
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} >
                    text
                </GridBox.GridItem>
            </GridBox>
        ))}
    </div>
  )
}
