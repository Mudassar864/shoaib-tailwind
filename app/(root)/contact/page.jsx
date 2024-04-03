import HeaderBlack from "@/app/ui/headerBlack";
import { AddForm } from "@/components/AddForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="flex min-h-[500px]">
        <div className="basis-[55%] px-20 py-10">
          <span className="text-6xl uppercase font-benton text-[#949494]">
            Contact
          </span>
          <h1 className="text-[#949494] mt-4 text-6xl uppercase font-normal flex flex-col max-w-max ml-auto">
            Shoaib
            <span className="ml-[20%] font-bold text-[#212121] text-7xl">
              Shahid
            </span>
          </h1>

          <form action="#">
            <div className="w-full flex flex-col pt-8 gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="basis-1/2 border border-[#949494] placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="basis-1/2 border border-[#949494] placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="tel"
                  className="basis-1/2 border border-[#949494] placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="basis-1/2 border border-[#949494] placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-2">
                <textarea
                  placeholder="Your Message"
                  className="basis-full border border-[#949494] placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
                ></textarea>
              </div>
              <input type="submit" className="border max-w-max px-16 py-3 uppercase font-benton text-sm border-[#949494] cursor-pointer hover:bg-[#949494] transition-all duration-500 font-bold hover:text-white" value="submit" />
            </div>
          </form>
        </div>
        <div className="basis-[45%] relative">
          <div
            className="pl-6"
            style={{ backgroundImage: "url(/assets/about-img.jpg)" }}
          >
            <Image
              className=""
              src="/assets/about-img.jpg"
              width={900}
              height={1200}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
