import Image from "next/image";
import Link from "next/link";
import React from "react";
import about from "@/public/assets/about-img.jpg";

/**
 * About section featuring Shoaib Shahid's profile and achievements
 * @returns {JSX.Element} The about section component
 */
export default function About() {
  return (
    <section 
      className="bg-[#f7f7f7] py-20 px-4"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Content Column */}
        <article className="col-span-1 flex flex-col items-start justify-center gap-6 py-8 md:py-12 border-t border-b border-white/20">
          {/* Heading */}
          <h2 
            id="about-heading"
            className="text-black text-2xl md:text-4xl lg:text-5xl"
          >
            About Shoaib <span className="font-bold">Shahid.</span>
          </h2>

          {/* Biography */}
          <div className="space-y-4">
            <p className="text-sm md:text-base font-benton text-black/90 leading-relaxed">
              Shoaib Shahid is a highly esteemed global real estate consultant with
              over fifteen years of experience in international sales and business
              development. He has overseen a staggering $1.5 billion USD worth of
              property sales. Shoaib's incredible list of achievements has
              resulted in multiple awards, and saw him rank as the top earner for
              Christie's International Real Estate for three consecutive years.
            </p>

            <p className="text-sm md:text-base font-benton text-black/90 leading-relaxed">
              Shoaib specializes in off-plan properties and works closely with
              large development companies, as well as sourcing prime land for
              private developers. He also serves as a luxury real estate
              consultant, renowned for finding the most prestigious properties
              located in highly exclusive locations.
            </p>

            <p className="text-sm md:text-base font-benton text-black/90 leading-relaxed">
              Continuously delivering exceptional results, Shoaib has built an
              incredible portfolio of high-net-worth clients who praise his expert
              knowledge, keen eye for detail, and unique ability to see a project
              through from inception to completion—creating a lasting impact in the
              world of luxury real estate.
            </p>
          </div>

          {/* Call to Action */}
          <Link 
            className="inline-block text-black border border-[#e8e8e8] bg-white py-3 px-8 font-semibold transition-all duration-300 hover:border-black  mt-2"
            href="/about"
            aria-label="Learn more about Shoaib Shahid"
          >
            Learn More
          </Link>
        </article>

        {/* Image Column */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-none">
            <Image
              className="object-cover rounded-lg shadow-2xl"
              src={about}
              width={800}
              height={1000}
              placeholder="blur"
              alt="Shoaib Shahid - Luxury Real Estate Consultant"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}