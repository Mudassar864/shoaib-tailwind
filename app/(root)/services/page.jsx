import Developments from "@/app/ui/developments";
import HeaderSection from "@/app/ui/headerSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderSection />
      <div className=" w-full pt-[50%] md:pt-[40%] relative">
        <Image
          src="/assets/service-banner.png"
          className="object-cover"
          fill={true}
          alt="banner"
        />
      </div>
      <div className="max-w-3xl mx-auto my-16 flex flex-col gap-4">
        <h2 className="font-medium text-2xl text-center tracking-widest">
          SPACIOUS RETREATS
        </h2>
        <p className="text-sm text-center font-normal">
          Gaze across the uninterrupted horizon from your private water villa,
          suspended over the ocean. Discover the iconic city skylines surrounded
          by tranquil waterways. Enjoy your front-row seat to the wonders of
          nature, from a lodge nestled in the foothills of remote jungle, to
          exceptional suites and expansive villas. Discover a sanctuary you’ll
          never want to leave.
        </p>
      </div>
      <div className="py-16">
        <div className="max-w-5xl  mx-auto  flex  ">
          <div className="basis-[60%] p-16 bg-gray-100 relative after:content-[''] after:absolute after:-right-36 after:-z-10 after:top-0 after:w-36 after:h-full after:bg-gray-100">
            <h2 className="text-2xl mb-4">EXCLUSIVELY YOURS</h2>
            <p className="font-benton font-normal">
              Nowhere else do the wonders of the planet’s most incredible
              locations fuse so intimately with the warm feeling of home.
              Spacious retreats that envelop you in seclusion and seamlessly
              blend outdoors with in, immersing you in the colours and textures
              of ‘here’. Offering the finest private amenities and unrivalled
              personal service. This is living at its very best.
            </p>
          </div>
          <div className="basis-[40%] h-96 overflow-hidden -mt-16">
            <Image
              src="/assets/2cars.jpg"
              className="object-cover"
              width={800}
              height={200}
              alt="car1"
            />
          </div>
        </div>
      </div>
     
      <Developments />
    </>
  );
}
