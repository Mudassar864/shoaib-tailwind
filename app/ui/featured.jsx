import Image from "next/image";
import Link from "next/link";
import React from "react";
import c1 from "@/public/assets/strYYZXRls.353670.jpg";
import services2 from "@/public/assets/women_with_child.jpg";
export default function Featured() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="lg:max-w-4xl mx-auto flex flex-col gap-4 md:flex-row justify-between">
        <div className="basis-3/5">
          <h2 className="text-lg font-normal mb-8 font-benton">
            <span className=""> Global Reach, Local Expertise:</span>{" "}
            <b>We're International</b>, Everywhere You Need Us
          </h2>
          <div className="w-[400] h-[600px] overflow-hidden ">
            <Image
              className="w-full h-full object-cover"
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
          <p className="text-sm my-3 font-benton">
            Shoaib <span className="font-bold">Shahid</span> oversees corporate investments and super-prime
            properties for the world's most discerning clients. 
            <br/>
            Renowned for his vision and discretion, he curates landmark projects with unmatched
            precision. Every investment he manages reflects exclusivity,
            strategic brilliance, and lasting value.
          </p>
        </div>
      </div>
    </section>
  );
}
