import Image from "next/image";
import Link from "next/link";
import React from "react";
import c1 from "@/public/assets/c1.jpg";
import services2 from "@/public/assets/services2.jpg";
export default function Featured() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="lg:max-w-4xl mx-auto flex flex-col gap-4 md:flex-row justify-between">
        <div className="basis-3/5">
          <h2 className="text-lg font-normal mb-8 font-benton">
           <span className=""> Global Reach, Local Expertise:</span> <b>We're International</b>, Everywhere You
            Need Us
          </h2>
          <div className="">
            <Image
              className="w-full h-full"
              alt="service"
              src={c1}
              width={400}
              height={600}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="basis-2/6 flex flex-col gap-4">
          <div className="hidden md:block relative w-full h-[400px] ">
            <Image
              className="object-cover"
              src={services2}
              placeholder="blur"
              fill={true}
              alt="service"
            />
          </div>
          <p className="text-sm my-3">
            Muhammad Shoaib Shahid: Global real estate consultant with 15+ years
            experience, oversaw $1.5B property sales, specializes in off-plan
            properties, luxury real estate, and prestigious locations.
          </p>
          <Link
            className="py-3 px-9 max-w-max font-benton text-bkack border border-black transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue hover:text-white"
            href="#"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
