"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Banner() {
  return (
    <section className="w-full relative bg-black pt-[48%] overflow-hidden">
      {/* <video muted autoPlay loop playsInline className="w-full">
        <source src="/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="absolute top-0 left-0 w-full">
        <CldVideoPlayer
          src="pahizwbjznyu3rdd6koh"
          controls={false}
          autoplay={true}
          playsinline={true}
          loop
          muted
          posterOptions={{
            publicId: "gzphvg7gj7pybifcmdib",
            effect: ["sepia"],
          }}
        />
      </div>
      <div className="absolute bottom-[12%] left-[5%] max-w-96 hidden lg:block">
        <h2 className="md:text-lg text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <button className="btn-border-white">Explore</button>
      </div>
    </section>
  );
}
