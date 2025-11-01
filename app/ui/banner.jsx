"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Banner() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Hero banner with video background"
    >
      {/* Video Background Container */}
      <div className="absolute top-0 left-0 w-full h-full bg-white">
        {/* Loading Spinner Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Video Player */}
        <CldVideoPlayer
          src="1101_rgop5u"
          controls={false}
          width="100%"
          height="100%"
          autoplay
          playsinline
          loop
          muted
          onMetadataLoad={handleVideoLoad}
        />
      </div>

      {/* Overlay Gradient for Better Text Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Text Content */}
      <div className="absolute bottom-[12%] left-[5%] max-w-96 hidden lg:block z-20">
        <h2 className="md:text-lg text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <Link
          href="/off-plan-projects/amali-island"
          className="inline-block py-3 px-9 font-benton text-white border border-white transition-all duration-300 hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Explore Amali Island project"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
