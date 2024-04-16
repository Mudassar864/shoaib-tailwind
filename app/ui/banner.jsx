"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/public/assets/beach.jpg";
import Link from "next/link";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
export default function Banner() {
  return (
    <section className="w-full relative  pt-[48%] overflow-hidden bg-black">
      {/* <Image src={image1} placeholder="blur" alt="first iamge" fill  /> */}
      <div className="absolute top-0 left-0 w-full   bg-[url('/assets/beach.jpg')] bg-cover bg-center bg-no-repeat ">
        <CldVideoPlayer
          src="pahizwbjznyu3rdd6koh"
          controls={false}
          autoplay={true}
          playsinline={true}
          loop
          muted
          posterOptions={{
            publicId: "gzphvg7gj7pybifcmdib",
          }}
          className=""
        />

        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src="/api/video" />
        </video> */}
      </div>
      <div className="absolute bottom-[12%] left-[5%] max-w-96 hidden lg:block">
        <h2 className="md:text-lg text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <Link href="/off-plan-project" className="py-3 px-9 font-benton text-white border transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue">
          Explore
        </Link>
      </div>
    </section>
  );
}
