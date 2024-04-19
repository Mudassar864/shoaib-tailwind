import Image from "next/image";
import Link from "next/link";
import React from "react";
import about from "@/public//assets/about-img.jpg";
export default function About() {
  return (
    <section className="bg-sothebys-blue py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 flex flex-col items-center justify-center gap-8 py-4 md:py-2 border-t border-b">
          <h2 className="text-white text-xl md:text-4xl">About Shoaib <span className="font-bold">Shahid.</span></h2>
          <p className="text-base font-benton text-white">
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
          <Link className="text-white border py-4 px-8  hover:bg-white hover:text-sothebys-blue font-bold transition-all duration-300" href="/about">
            Explore
          </Link>
        </div>
        <div className="col-span-1">
          <Image
            className="object-contain"
            src={about}
            width={800}
            height={1000}
            placeholder="blur"
            alt="about"
          />
        </div>
      </div>
    </section>
  );
}
