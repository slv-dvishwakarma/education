import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardBox = {
    title: string;
    description: string;
    image: string;
    link: {
        url: string;
        target: "_blank" | "_self";
    };
};

export const CardBox = ({ title, description, image, link }: any) => {
    return (
        <div className="bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] hover:shadow-none transition-all group">
            <Link
                className="flex flex-col"
                href={link.url}
                target={link.target}
            >
                <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden xl:h-[203px] lg:h-[203px] md:h-[267px]">
                    <Image src={image} alt={title} width={400} height={400} className="w-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                </div>

                <div className="mt-4 mb-6 px-4">
                    <h3 className="text-md font-normal group-hover:text-primary line-clamp-1 ">{title}</h3>
                    <p className="mt-3 text-gray-500 font-light line-clamp-3">{description}</p>   
                </div>
            </Link>
        </div>
    );
};
