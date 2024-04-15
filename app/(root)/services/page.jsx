import About from "@/app/ui/about";
import Developments from "@/app/ui/developments";
import Footer from "@/app/ui/footer";
import HeaderSection from "@/app/ui/headerSection";
import Image from "next/image";
import React from "react";
import image1 from "@/public/assets/a.png";
import ServicsDetails from "@/app/ui/ServicesDetail";
export default function page() {
  return (
    <>
      <HeaderSection />
      <div className=" w-full pt-[50%] md:pt-[35%] relative">
        <div className="absolute left-0 top-0 w-full h-full bg-black z-[5] opacity-20"></div>
        <Image
          src="/assets/plan.jpg"
          className="object-cover"
          fill={true}
          alt="banner"
        />
      </div>
      <div className="max-w-3xl mx-auto my-16 flex flex-col gap-4 px-4">
        <h2 className="text-2xl md:text-4xl text-center  text-sothebys-blue font-bold">
          Rise above the crowed.
        </h2>
        <p className="text-base text-center font-normal font-benton">
          With unparalleled expertise in the luxury segment, Shoaib goes beyond
          the ordinary to elevate your property buying experience. Rise above
          the crowd with confidence as we provide a platform for your most
          important decisions. Shoaib ensures thorough due diligence and takes
          full responsibility, ensuring peace of mind every step of the way
        </p>
      </div>
      <div className="py-16">
        <div className="max-w-6xl  mx-auto  flex flex-col md:flex-row ">
          <div className="basis-full md:basis-1/2 lg:basis-[70%] p-16 bg-sothebys-blue text-white relative after:content-[''] after:absolute after:-right-36 after:-z-10 after:top-0 after:md:w-36 after:h-full after:bg-sothebys-blue">
            <h2 className="text-2xl md:text-4xl mb-4 font-medium">EXCLUSIVELY YOURS</h2>
            <p className="font-benton font-light text-base">
              <span className="font-acta font-light ">
                Shoaib <span className="font-semibold text-white">Shahid</span>.
              </span>{" "}
              a seasoned Global Real Estate Consultant with a decade of
              expertise in luxury properties. Shoaib has facilitated numerous
              High Net Worth Individuals in living and investing in the world's
              most prestigious destinations. With his exclusive services, he
              will ensure you receive unparalleled guidance and support for your
              real estate endeavors.
            </p>
          </div>
          <div className="basis-full md:basis-1/2 lg:basis-[30%] overflow-hidden -mt-16">
            <Image
              src={image1}
              className="object-contain"
              width={800}
              height={600}
              alt="shaoib shahid"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <ServicsDetails />
      {/* <About /> */}
      <Footer />
    </>
  );
}
