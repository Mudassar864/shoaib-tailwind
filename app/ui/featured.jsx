import Image from "next/image";
import Link from "next/link";
import React from "react";
import service1 from "@/public/assets/services.jpg"
import services2 from "@/public/assets/services2.jpg"
export default function Featured() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="lg:max-w-4xl mx-auto flex flex-col gap-4 md:flex-row justify-between">
        <div className="basis-3/5">
          <h2 className="text-lg mb-8">
            <span className="font-semibold">DISCOVER THE ACRES:</span> WHERE
            NATURE EMBRACES YOUR HOME
          </h2>
          <div className="pt-[133%] relative">
            <Image
              className="w-full h-full object-cover"
              alt="service"
              src={service1}
              fill={true}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="basis-2/6 flex flex-col gap-4">
          <div className="hidden md:block">
            <Image
              className="w-full h-[400px] object-cover relative"
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
          <Link className="btn-border" href="#">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
