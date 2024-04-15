import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/public//assets/cIMG_8191.jpg";
import project2 from "@/public//assets/pj.jpg";
import project3 from "@/public//assets/car.jpg";
export default function ServicsDetails() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="md:px-16 mx-auto">
        <div className="px-5 text-center  mx-auto">
          <h2 className="text-xl md:text-4xl mb-4 font-medium text-sothebys-blue md:max-w-2xl mx-auto">
            Our exclusive services aren't for everyone, but they could be for
            you.
          </h2>
          <p className="text-sm text-center max-w-max mx-auto leading-loose">
           
              <b>Personalized Attention:</b> Tailored services that cater to the
              unique needs and preferences of each client.
            <br />
              <b>Expert Market Knowledge:</b> In-depth understanding of local
              and global real estate markets, trends, and opportunities.
            <br />
            <b>Access to Exclusive Properties:</b> Access to a curated selection
            of luxury properties, including off-market listings and private
            estates.
            <br />
            <b>Network of Professionals:</b> Connections with top architects,
            interior designers, lawyers, and financial advisors to ensure a
            seamless transaction process.
            <br />
            <b>Privacy and Discretion:</b> Respect for client confidentiality
            and the ability to handle high-profile transactions with discretion.
            <br />
            <b>Exceptional Customer Service:</b> Prompt responsiveness, clear
            communication, and a commitment to exceeding client expectations.
            <br />
            <b>End-to-End Support:</b> Comprehensive assistance throughout the
            entire real estate journey, from property search to closing and
            beyond.
            <br />
            <b>Value-added Services:</b> Additional offerings such as property
            management, concierge services, and investment advice to enhance the
            client experience.
          </p>
        </div>
        <div className="grid grid-cols-1 pt-7 gap-8 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="flex flex-col">
            <div className="w-full h-[300px] overflow-hidden relative">
              <Image
                src={project2}
                className="object-cover"
                fill={true}
                alt="project two"
                placeholder="blur"
                priority
              />
            </div>
            <div className="flex flex-col pt-4 gap-3 ">
              <h3 className="text-base font-normal text-black ">
                <span className="font-semibold text-sothebys-blue">
                  Sky-high Luxury:
                </span>{" "}
                Your Ultimate Luxury Experience Begins Now.
              </h3>
              <p className="text-sm mb-2">
                Experience Our Exclusive Services, Including Private Jet Rentals
                for a Seamless Trip from Your Home to Dubai, Ensuring Peace of
                Mind for You and Your Family. Your Ultimate Luxury Experience
                Awaits.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[300px] overflow-hidden relative">
              <Image
                src={project3}
                className="object-cover"
                fill={true}
                placeholder="blur"
                priority
                alt="project three"
              />
            </div>
            <div className="flex flex-col pt-4 gap-3 ">
              <h3 className="text-base font-normal text-black ">
                <span className="font-semibold text-sothebys-blue">
                  Elegance Unveiled:
                </span>{" "}
                Redefining Luxury in Every Viewing Experience
              </h3>
              <p className="text-sm mb-2">
                Indulge in Luxury from the Moment You Touch Down: Our Exclusive
                Airport Pick-Up and Drop-Off Services Ensure a Seamless
                Transition to Your Hotel and Property Viewings. Rest Assured,
                Your Experience Will Be Nothing Short of Unforgettable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
