import Image from "next/image";
import React from "react";
import Bvlgari from "../icons/Bvlgari";
import redseaicon from "@/public/assets/logo-hero.svg";

import beach from "@/public/assets/four_season.jpg";
export default function Featured2() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={beach}
          className="object-cover"
          placeholder="blur"
          fill={true}
          
          alt="beach"
        />
      </div>
      <div className="absolute top-12 right-20 flex flex-col items-center justify-center">
        <Image src={redseaicon} width={80} height={80} alt="featured" className="w-21 h-21"/>
        <p className="mt-2 text-lg text-white font-normal">
          Four Seasons Private Residences Red Sea{" "}
        </p>
        <p className="mt-4 text-sm max-w-sm text-center text-white">
          Four Seasons is a globally renowned luxury hospitality brand, known
          for its exceptional service, elegant properties, and personalized
          experiences.
        </p>
      </div>
    </section>
  );
}
