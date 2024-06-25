import { Heading } from '@/components/core/Heading'
import { Paragraph } from '@/components/core/Paragraph'
import Image from 'next/image'
import React from 'react'

interface ImageTextItem {
    image: string;
    title: string;
    description: string;
    style: string;
}

interface ImageTextProps {
    imagetextitem: ImageTextItem;
}

export const ImageText: React.FC<ImageTextProps> = ({ imagetextitem }) => {


    return (
        <div className='mt-32 mb-20 space-y-24' id='about-us'>
            {imagetextitem.style === "style-1" ? (
                <div className='container xl:flex lg:flex md:flex flex flex-wrap  xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5 items-center xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] lg:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] md:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] pb-[50px] pt-[20px]' >
                    <div className='xl:pl-8 lg:pl-8 md:pl-8 xl:w-[35%] lg:w-[35%] md:w-[35%] w-full'>
                        <Heading>{imagetextitem.title}</Heading>
                        <Paragraph>{imagetextitem.description}</Paragraph>
                    </div>
                    <div className='relative xl:w-[65%] lg:w-[65%] md:w-[65%] w-full'>
                        <Image className='h-[400px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] xl:w-[85%] lg:w-[85%] md:w-[85%] w-full z-[1] relative xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px] float-right' src={imagetextitem.image} alt={imagetextitem.title} width={1500} height={1000} />
                        <Image className='hidden xl:block lg:block md:block absolute xl:right-[-70px] lg:right-[-7px] md:right-[0px] bottom-[-60px] ' src="/images/edumall-shape-01.png" alt={imagetextitem.title} width={179} height={178} />
                    </div>
                </div>
            ) : (
                <div className='container xl:flex lg:flex md:flex flex flex-wrap  xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5 items-center xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] lg:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] md:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] pb-[50px] xl:pt-[20px] lg:pt-[20px] md:pt-[20px] pt-[50px]' >
                    <div className='relative xl:w-[65%] lg:w-[65%] md:w-[65%] w-full'>
                        <Image className='h-[400px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] z-[1] xl:w-[85%] lg:w-[85%] md:w-[85%] w-full relative xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px]' src={imagetextitem.image} alt={imagetextitem.title} width={1500} height={1000} />
                        <Image className='hidden xl:block lg:block md:block absolute xl:left-[-66px] lg:left-[-7px] md:left-[-7px] bottom-[-68px] ' src="/images/edumall-shape-01.png" alt={imagetextitem.title} width={179} height={178} />
                    </div>
                    <div className='xl:w-[35%] lg:w-[35%] md:w-[35%] w-full xl:pr-8 lg:pr-8 md:pr-8'>
                        <Heading>{imagetextitem.title}</Heading>
                        <Paragraph>{imagetextitem.description}</Paragraph>
                    </div>
                </div>
            )}
        </div>
    )
}
