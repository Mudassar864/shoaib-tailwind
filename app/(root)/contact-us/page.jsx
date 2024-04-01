import HeaderBlack from "@/app/ui/headerBlack";
import { AddForm } from "@/components/AddForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="about-us">
        <div className="mt-12" />
        <h1 className="text-[32px] md:text-[40px] text-center text-sothebys-blue mb-6">
          Get In Touch
        </h1>
        <div className="font-benton text-md md:text-xl text-center font-light md:w-3/5 mx-auto p-4">
          For those who demand an elevated service like none other, there's
          Dubai Sotheby's International Realty. We're the industry's best
          agents, curating with incomparable attention to style and detail.
          We're here for you, to help you buy or sell your home at a scale you
          just won't find anywhere else.
        </div>
        <div className="block lg:hidden" style={{ height: 15 }} />
        <div className="hidden lg:block" style={{ height: 30 }} />
        <div className="bg-[#262626]">
          <div className="wide-container !max-w-[1518px]  text-white border-0 flex flex-col lg:flex-row mx-auto">
            <div className="w-full lg:w-1/2 pt-12 pb-[46px] lg:pb-[72px] lg:pl-5 xl:pl-[180px] font-normal flex justify-center lg:justify-start">
              <div className="container !max-w-[461px] xl:!ml-0">
                <div className="mb-6 text-2xl">Get in touch</div>
                <div className="mb-5 font-benton text-[15px] leading-[22px] tracking-[0.375px]">
                  Please complete the form below, and your message will be
                  promptly delivered to the appropriate department and staff
                  member who will contact you in the next 24 hours. <br />
                  <br />
                  If you require immediate assistance, please don't hesitate to
                  call or WhatsApp on +971 527 180606.
                </div>
                <AddForm id="no" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-0 lg:pt-12 pb-9 lg:pb-12">
              <div className="container lg:no-container w-full font-normal flex flex-col sm:items-center">
                <div className="mb-5 lg:mb-6 text-2xl ">Office</div>
                <div className="font-benton sm:grid  md:py-5">
                  <div className=" w-full">
                    <Image src="/assets/logo_ae.svg" width={300} height={400} alt="sothebys logo" />
                    <p className="tracking-[0.375px] text-[15px] leading-[22px] mb-0 mt-4">
                      EMAAR Business Park,{" "}
                    </p>
                    <p className="mb-0">Building. 4, </p>
                    <p className="mb-0">Office G-05,</p>
                    <p className="mb-0">Sheikh Zayed Road,</p>
                    <p className="mb-0">Dubai, </p>
                    <p className="mb-0">United Arab Emirates.</p>
                    <p className="mb-0" />
                    <p className="mb-0" />
                    <p className="mb-0" />
                    <p className="mt-4 font-medium text-[15px]">
                      <Link
                        href="https://maps.app.goo.gl/aPSaSjuVsK4tvdWR9"
                        target="_blank"
                      >
                        View map
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
