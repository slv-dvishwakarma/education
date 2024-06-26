"use client"
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { FaLongArrowAltRight } from "react-icons/fa";

export const Newsletter = () => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
                <div className='w-full'>
                    <Controller
                        name="newsletter"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="text"
                                className="w-full border-none rounded-[8px_0px_0px_8px] focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] placeholder:text-[16px] text-[16px] px-3"
                                placeholder="Enter Your Email"
                                autoComplete="off"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                </div>
                <div>
                    <button className='flex w-[50px] h-[51px] rounded-[0px_8px_8px_0px] text-[white] text-3xl justify-center items-center bg-[#141C98]'><FaLongArrowAltRight /></button>
                </div>
            </form>
            <div>
                {errors["newsletter"] && <span className="text-red-500 text-sm">Please Enter Your Email</span>}
            </div>
        </>
    )
}
