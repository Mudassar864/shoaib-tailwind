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
              Shoaib Shahid is a globally recognized real estate and corporate
              investment strategist with over fifteen years of international
              experience. As Executive Director at Christie's International Real
              Estate, he specializes in ultra-luxury properties, joint venture
              structuring, developer advisory, and corporate investments across
              Dubai and global markets.
            </p>

            <p className="text-sm md:text-base font-benton text-black/90 leading-relaxed">
              Having overseen over USD 1.5 billion in property sales, Shoaib is
              trusted by UHNW and VVIP clients for his strategic insight, legal
              acumen, and ability to deliver exceptional results. His deep
              global exposure and refined market intelligence make him a leading
              voice in super-prime and cross-border real estate investments.
            </p>
          </div>

          {/* Call to Action */}
          <Link
            className="inline-block text-black border border-[#e8e8e8]  py-3 px-8 font-semibold transition-all duration-300 hover:border-black  mt-2"
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
