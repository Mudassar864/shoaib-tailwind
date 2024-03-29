import Image from "next/image";
import Link from "next/link";
import React from "react";
import about from "@/public//assets/about.jpg"
export default function About() {
  return (
    <section className="bg-gray-100 py-8 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:flex-row md:gap-16 md:px-16 overflow-hidden">
        <div className="md:basis-3/4  border-y-[1px] py-8 flex flex-col gap-4 items-center justify-center border-[#302d2d] mx-auto">
          <h2 className="text-xl uppercase text-center font-bold">About Shoaib Shahid</h2>
          <p className="text-sm">
            Shoaib Sahid is a highly esteemed global real estate consultant who
            has over fifteen years experience in international sales, business
            development and has overseen a staggering 1.5 billion USD worth of
            property sales. Shoaib's incredible list of achievements has
            resulted in multiple awards, and saw him rank as the top earner for
            Christie's International Real Estate for three consecutive years.
            <br /> <br />
            Shoaib specialises in off-plan properties and works closely with
            large development companies, as well as sourcing prime land for
            private developers. He also works as a luxury real estate
            consultant. Renowned for finding the most prestigious properties
            located in highly exclusive locations, and continuously delivering
            exceptional results, these factors have led to an incredible list of
            high-net-worth clients who laud Shoaib's expert knowledge, keen eye
            for detail, and unique ability to see a project through from
            inception to completion resulting in a lasting impact in the world
            of luxury real estate.
          </p>
          <Link className="btn-border" href="#">
            Explore
          </Link>
        </div>
        <div className="md:basis-1/4 w-2/4 h-auto relative flex items-center mx-auto overflow-hidden">
          <Image
            className="object-contain"
            src={about}
            width={1000}
            height={1000}
            placeholder="blur"
            alt="about"
          />
        </div>
      </div>
    </section>
  );
}
