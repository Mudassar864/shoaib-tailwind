import Image from "next/image";
import React from "react";
import Baccarat from "../icons/Baccarat";
import redseaicon from "@/public/assets/red_sea-icon.svg";
import Link from "next/link";
import feature from "@/public/assets/featured_four_seasons.jpg";
import featureBack from "@/public/assets/red_sea_beach.jpg";
export default function Featured1() {
  return (
    <section className="w-full lg:h-[120vh] relative overflow-hidden">
      <div className="fixed top-0 left-0 -z-10  w-full h-full hidden lg:block ">
        <Image
          src={featureBack}
          placeholder="blur"
          fill={true}
          className="object-cover"
          alt="featured"
        />
      </div>
      <div className="border-b  max-w-5xl py-16 flex flex-col lg:flex-row items-center  gap-8 lg:absolute lg:bottom-0 lg:left-0 bg-white">
        <div className="">
          <Image
            src={feature}
            placeholder="blur"
            width={1080}
            height={900}
            alt="featured"
          />
        </div>
        <div className="flex flex-col gap-8 items-center lg:px-8 justify-center ">
          <Image
            src={redseaicon}
            width={306}
            height={118}
            className="w-21 h-21"
            alt="featured"
          />
          <p className="text-sm">Excellence that endures</p>
          <Link
            className="py-3 px-9 max-w-max font-benton text-bkack border border-black transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue hover:text-white"
            href="/off-plan-projects/baccarat-hotel-and-residences"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
