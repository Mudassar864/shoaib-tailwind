import HeaderSection from "@/app/ui/headerSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderSection />
      <div className=" w-full h-screen overflow-hidden">
        <div className="aspect-video ">
          <Image src="/assets/service-banner.png" fill={true} alt="banner" />
        </div>
      </div>
    </>
  );
}
