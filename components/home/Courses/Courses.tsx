import { Heading, Paragraph } from '@/components/core';
import React from 'react'

export const Courses = () => {

    const data = {
        title: "Courses",
        description: "Join us on the Skilline journey. Together, we can create a skilled and empowered India. Whether you're a learner seeking new opportunities, an institution aiming to enhance education, or a policymaker striving to improve governance, Skilline is here to support you."
    }

    return (
        <div className="py-[70px] bg-[#F8F8F8]">
            <div className="container space-y-10">
                <div className='w-[70%] space-y-2'>
                    <Heading>{data.title}</Heading>
                    <Paragraph>{data.description}</Paragraph>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                </div>
            </div>
        </div>
    )
}
