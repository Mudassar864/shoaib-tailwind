import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import { AddForm } from "@/components/AddForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="flex min-h-[500px] flex-col-reverse lg:flex-row">
        <div className="basis-full lg:basis-[55%] px-20 py-10">
          <span className="text-3xl lg:text-6xl uppercase text-sothebys-blue">
            Contact
          </span>
          <h1 className="text-[#949494] mt-4 text-3xl lg:text-6xl capitalize font-normal flex flex-col max-w-max ml-auto">
            Shoaib
            <span className="ml-[20%] font-bold text-sothebys-blue text-4xl lg:text-7xl">
              Shahid
            </span>
          </h1>
          <div className="flex flex-col gap-4 mt-8">
            <h3 className="text-5xl text-sothebys-blue"> Get in touch</h3>
            <p>
              Please complete the form below, and your message will be promptly
              delivered to the appropriate personnel who will respond within the
              next 5 to 10 minutes.
            </p>
            <p>
              If you require immediate assistance, please don't hesitate to <b>call
              or whatsapp</b> us on <span className="inline-block"><Link href="tel:+971527180606"><strong className="text-sothebys-blue">+971 52 7180606</strong></Link></span>.
            </p>
          </div>
          <form action="#">
            <div className="w-full flex flex-col pt-8 gap-3">
              <div className="flex gap-2 flex-col md:flex-row">
                <input
                  type="text"
                  className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <input
                  type="tel"
                  className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <textarea
                  placeholder="Your Message"
                  className="basis-full border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                ></textarea>
              </div>
              <input
                type="submit"
                className="py-3 px-12 uppercase cursor-pointer max-w-max font-benton text-bkack border  transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue hover:text-white"
                value="submit"
              />
            </div>
          </form>
        </div>
        <div className="basis-full lg:basis-[45%] relative ">
         
            <Image
              className="w-full object-cover"
              src="/assets/about-img.jpg"
              width={900}
              height={1200}
              alt="image"
            />
        </div>
      </div>
      <Footer />
    </>
  );
}
