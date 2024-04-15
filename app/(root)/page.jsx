import Image from "next/image";
import Banner from "../ui/banner";
import Developments from "../ui/developments";
import About from "../ui/about";
import Featured from "../ui/featured";
import Featured1 from "../ui/featured1";
import Achievements from "../ui/achievements";
import Featured2 from "../ui/featured2";
import CallToAction from "../ui/cta";
import Footer from "../ui/footer";
import HeaderSection from "../ui/headerSection";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <Banner />
      <Developments />
      <About />
      {/* <section className="flex w-full h-[600px] overflow-hidden bg-sothebys-blue relative">
        <div className="w-[800px] h-full bg-red-300">
          <Image
            src="/assets/c1.jpg"
            className="object-cover w-full h-full"
            width={400}
            height={600}
            alt="chairman"
          />
        </div>
        <div
          className="w-full h-full  absolute top-0 right-0 "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17, 37, 72, 0.1),rgba(17, 37, 72, 0.6),rgba(17, 37, 72, 1), rgba(17, 37, 72, 1))",
          }}
        ></div>
      </section> */}
      <Featured />
      <Featured1 />
      <section className="w-full bg-white overflow-hidden relative ">
        <div className="w-full lg:h-[600px] overflow-hidden">
          <div className="md:absolute md:top-[50%] md:-translate-y-[50%] p-8 left-10 w-full md:w-[50%] font-benton bg-sothebys-blue text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-4xl font-bold font-acta">
                Global Real Estate Consultant
              </h3>
              <p className="text-sm">
                Shoaib Shahid: Global real estate consultant with 15+ years
                experience, oversaw $1.5B property sales, specializes in
                off-plan properties, luxury real estate, and prestigious
                locations.
              </p>
              <span className="font-medium text-lg">Property Sold</span>
              <div className="flex gap-4 border-b pb-3">
                <span className="text-2xl md:text-4xl basis-1/2 font-bold">
                  $1.5 Billion
                </span>
                <span className="text-sm md:text-base basis-1/2 font-bold">
                Serving 70+ HNWIs and Top Companies with Distinction
                </span>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-bold">
                    Consistently Ranked #1 Top Earner Previously at Christie's
                    International Real Estate
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/meeting.jpg"
            className="hidden md:block w-full h-full ml-40 object-cover group-hover:scale-125 transition-all duration-300"
            width={1900}
            height={600}
            alt="image"
          />
        </div>
      </section>
      {/* <Achievements /> */}
      <Featured2 />
      <Footer />
    </>
  );
}
