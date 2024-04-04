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
      <Featured />
      <Featured1 />
      <section className="w-full bg-white overflow-hidden relative ">
        <div className="w-full h-[600px] aspect-video overflow-hidden">
          <div className="absolute top-[50%] -translate-y-[50%] p-8 left-4 w-[40%] font-benton bg-sothebys-blue text-white">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-bold">REAL ESTATE ENTREPRENEUR</h3>
              <p className="text-sm">
                Shoaib Shahid: Global real estate consultant with 15+ years
                experience, oversaw $1.5B property sales, specializes in
                off-plan properties, luxury real estate, and prestigious
                locations.
              </p>
              <span className="font-medium text-lg">Last year sold nearly</span>
              <div className="flex gap-4 border-b pb-3">
                <span className="text-4xl basis-1/2 font-bold">
                  $1.5 Billion
                </span>
                <span className="basis-1/2 font-bold">
                  94.7% Closure Rate The most followed real estate brand in the
                  world
                </span>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">
                    Ranked The #6 Brokerage in NYC in Only the 2nd Year of
                    Operation 2022
                  </span>
                  <span className="text-xs">
                    by Wall Street Journal's Real Trends
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/meeting.jpg"
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
            width={1900}
            height={600}
            alt="image"
          />
        </div>
      </section>
      <Achievements />
      <Featured2 />
      <Footer />
    </>
  );
}
