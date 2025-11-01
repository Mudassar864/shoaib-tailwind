"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Banner() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="w-full relative h-screen overflow-hidden ">
      {/* Video background with spinner overlay */}
      <div className="video-container absolute top-0 left-0 w-full h-full bg-white">
        {isLoading && (
          <section className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <section className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></section>
          </section>
        )}

        <CldVideoPlayer
          src="1101_rgop5u"
          controls={false}
          width={"100%"}
          height={"100%"}
          autoplay
          playsinline
          loop
          muted
          onMetadataLoad={() => setIsLoading(false)} // Hide spinner when ready
        />
      </div>

      {/* Text content */}
      <div className="absolute bottom-[12%] left-[5%] max-w-96 hidden lg:block z-20">
        <h2 className="md:text-lg text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <Link
          href="/off-plan-projects/amali-island"
          className="py-3 px-9 font-benton text-white border transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
