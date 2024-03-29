import Image from "next/image";
import React from "react";
import Bvlgari from "../icons/Bvlgari";
import beach from "@/public/assets/beach.jpg"
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
      <div className="absolute top-12 right-8 flex  flex-col justify-center items-center ">
        <Bvlgari />
        <p className="mt-4 text-sm text-white">The height of luxury living elevated above island and sea.</p>
      </div>
    </section>
  );
}
