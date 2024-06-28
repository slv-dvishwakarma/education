import { Breadcrumb, Heading, IconBoxV2 } from "@/components/core";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const breadcrumb = [
    {
      label: "Home",
      link: "/",
      isActive: false,
    },
    {
      label: "Contact Us",
      link: "/",
      isActive: true,
    },
  ];

  const InputClass =
    "py-4 px-4 focus:outline-none font-[300]  border border-solid block w-full border-gray-200  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600";

  return (
    <>
      <Breadcrumb data={breadcrumb}>Contact us</Breadcrumb>
      <div className="container py-[80px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[30%] w-full pt-6">
            <Heading>Keep In Touch With Us.</Heading>
            <div className="divide-y divide-gray-200">
              <IconBoxV2
                className="py-6"
                icon="/images/map.png"
                title="Address"
              >
                1800 Abbot Kinney Blvd. Unit D & E Venice
              </IconBoxV2>
              <IconBoxV2
                className="py-6"
                icon="/images/mobile-phone.png"
                title="Phone"
              >
                Mobile: <b>(+91) - xxxx - xxx - xxx</b>
              </IconBoxV2>
              <IconBoxV2 className="py-6" icon="/images/map.png" title="Email">
                support@skilline.ai
              </IconBoxV2>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <Card className="p-10">
              <Heading className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Send a Message
              </Heading>
              <form>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="sr-only"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        className={InputClass}
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className="sr-only"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className={InputClass}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hs-email-contacts-1" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      className={InputClass}
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className={InputClass}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-about-contacts-1" className="sr-only">
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      className={cn(InputClass, "h-[150px]")}
                      placeholder="Details"
                    ></textarea>
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
