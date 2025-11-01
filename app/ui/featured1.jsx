import Image from "next/image";
import React from "react";
import redseaicon from "@/public/assets/red_sea-icon.svg";
import Link from "next/link";
import feature from "@/public/assets/red_sea_beach.jpg";
import featureBack from "@/public/assets/feature2Bg.jpg";

export default function Featured1() {
  return (
    <section className="w-full h-[120vh] relative overflow-hidden">
      {/* Background image with fixed positioning for parallax effect */}
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <Image
          src={featureBack}
          placeholder="blur"
          fill
          className="object-cover"
          alt="Feature background"
          priority
        />
      </div>
      
      {/* Content container positioned at the bottom */}
      <div className="border-b max-w-5xl md:py-16 flex md:flex-row flex-col-reverse items-center gap-8 absolute bottom-0 left-0 bg-white">
        {/* Image container */}
        <div className="md:max-w-[60%]">
          <Image
            src={feature}
            placeholder="blur"
            width={1080}
            height={900}
            alt="Red Sea beach"
            className="w-full h-auto"
          />
        </div>
        
        {/* Text and logo content */}
        <div className="flex flex-col gap-8 items-center px-8 py-8 md:py-0 justify-center">
          <Image
            src={redseaicon}
            width={200}
            height={100}
            className="w-auto h-32"
            alt="Red Sea icon"
          />
          <p className="text-sm font-medium">Excellence that endures</p>
          <Link
            className="py-3 px-9 max-w-max font-benton text-black border border-[#e8e8e8] transition-all duration-300 hover:bg-white hover:border-black "
            href="/off-plan-projects/four-seasons-private-residences-red-sea-global"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}