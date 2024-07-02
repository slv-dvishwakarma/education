"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const InputClass =
    "py-3 rounded px-4 focus:outline-none font-[300]  border border-solid block w-full border-gray-200  text-[18px] focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-black dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-black";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hs-firstname-contacts-1" className="sr-only">
              First Name
            </label>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  className={InputClass}
                  placeholder="First Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>

          <div>
            <label htmlFor="hs-lastname-contacts-1" className="sr-only">
              Last Name
            </label>

            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  className={InputClass}
                  placeholder="Last Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="hs-email-contacts-1" className="sr-only">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <input
                type="email"
                name="hs-email-contacts-1"
                id="hs-email-contacts-1"
                className={InputClass}
                placeholder="Email"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="hs-phone-number-1" className="sr-only">
            Phone Number
          </label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <input
                type="text"
                name="hs-phone-number-1"
                id="hs-phone-number-1"
                className={InputClass}
                placeholder="Phone Number"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="hs-about-contacts-1" className="sr-only">
            Details
          </label>

          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                className={cn(InputClass, "h-[150px]")}
                placeholder="Details"
                onChange={onChange}
                value={value}
              ></textarea>
            )}
          />
        </div>
      </div>

      <div className="mt-4 grid">
        <Button
          type="submit"
          className="w-max"
          // className="inline-flex w-max items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-white shadow hover:bg-primary md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[13px] md:text-[15px]"
        >
          Send inquiry
        </Button>
      </div>
    </form>
  );
};
