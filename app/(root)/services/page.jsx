import About from "@/app/ui/about";
import Developments from "@/app/ui/developments";
import Footer from "@/app/ui/footer";
import HeaderSection from "@/app/ui/headerSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderSection />
      <div className=" w-full pt-[50%] md:pt-[35%] relative">
        <div className="absolute left-0 top-0 w-full h-full bg-black z-[5] opacity-20"></div>
        <Image
          src="/assets/servicebg.jpg"
          className="object-cover"
          fill={true}
          alt="banner"
        />
      </div>
      <div className="max-w-3xl mx-auto my-16 flex flex-col gap-4">
        <h2 className="text-4xl text-center  text-sothebys-blue font-bold">
          SPACIOUS RETREATS
        </h2>
        <p className="text-base text-center font-normal font-benton">
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
          <div className="basis-[60%] p-16 bg-sothebys-blue text-white relative after:content-[''] after:absolute after:-right-36 after:-z-10 after:top-0 after:w-36 after:h-full after:bg-sothebys-blue">
            <h2 className="text-4xl mb-4 font-medium">EXCLUSIVELY YOURS</h2>
            <p className="font-benton font-normal text-base">
              Nowhere else do the wonders of the planet’s most incredible
              locations fuse so intimately with the warm feeling of home.
              Spacious retreats that envelop you in seclusion and seamlessly
              blend outdoors with in, immersing you in the colours and textures
              of ‘here’. Offering the finest private amenities and unrivalled
              personal service. This is living at its very best.
            </p>
          </div>
          <div className="basis-[40%] overflow-hidden -mt-16">
            <Image
              src="/assets/about-img.jpg"
              className="object-contain"
              width={800}
              height={600}
              alt="shaoib shahid"
            />
          </div>
        </div>
      </div>

      <Developments />
      {/* <About /> */}
      <Footer />
    </>
  );
}
