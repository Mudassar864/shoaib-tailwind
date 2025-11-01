import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Off-Plan Projects in Dubai | Shoaib Shahid Real Estate",
  description:
    "Explore premium off-plan real estate opportunities in Dubai with Shoaib Shahid. Handpicked developments, high ROI potential, and expert investment guidance.",

  keywords: [
    "off-plan projects Dubai",
    "Dubai real estate",
    "property investment",
    "off-plan property",
    "luxury developments",
    "Dubai property market",
    "Shoaib Shahid real estate",
    "invest in Dubai",
    "real estate consultant",
    "property listings Dubai"
  ],

  alternates: {
    canonical: "https://www.theshoaibshahid.com/off-plan-projects",
  },

  openGraph: {
    title: "Off-Plan Projects in Dubai | Shoaib Shahid",
    description:
      "Browse the top off-plan projects curated by Shoaib Shahid — featuring luxury properties, trusted developers, and excellent investment potential.",
    url: "https://www.theshoaibshahid.com/off-plan-projects",
    type: "website",
    images: [
      {
        url: "https://www.theshoaibshahid.com/assets/offplan-cover.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Dubai Off-Plan Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dubai Off-Plan Projects | Curated by Shoaib Shahid",
    description:
      "Discover luxury off-plan developments with Shoaib Shahid — the trusted name in Dubai real estate investments.",
    images: ["https://www.theshoaibshahid.com/assets/offplan-cover.jpg"],
  },
};


async function getData() {
  const query = `
    *[_type == "offPlanProject"]`;

  const data = await client.fetch(query);
  return data;
}
export const revalidate = 0; // revalidate at most every minute
export default async function page() {
  const data = await getData();
  return (
    <>
      <HeaderBlack />
      <section className="container px-4 pt-20 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-base">
            Discover the pinnacle of luxury living with <b>Shoaib Shahid</b>.
            Explore our handpicked selection of prestigious properties,
            elevating you to a level above the rest. Experience the privilege of
            owning a truly exceptional home.{" "}
            <span className="font-medium">Welcome to extraordinary living</span>
            .
          </p>
        </div>
      </section>
      <section className="container !mx-auto my-4 px-4">
        <div className="py-3 md:py-6 flex items-center justify-between font-benton">
          <div className="flex items-center text-sm font-normal text-black">
            <h1 className="font-benton font-medium text-lg text-black">
              Projects in UAE
            </h1>
            <span className="font-medium text-gray-400 text-base ml-2">
              ({data?.length})
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[43px] gap-y-[20px] md:gap-y-[35px] xl:gap-y-[50px]">
          {data?.length > 0
            ? data?.map((project, key) => (
                <div
                  key={key}
                  className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <Link
                    area-label={project.title}
                    href={`/off-plan-projects/${project.slug.current}`}
                  >
                    <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full ">
                      <div>
                        <div>
                          <Image
                            className="w-full h-full object-cover aspect-video"
                            src={urlForImage(project.images[0])}
                            width={500}
                            height={500}
                            alt="slider"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <section className="p-5 space-y-4">
                    <section className="space-y-3">
                      <div className="flex items-center gap-x-2 font-benton text-xs font-normal text-gray-500">
                        {project?.category?.map((item, key) => (
                          <div key={key} className="flex items-center gap-x-2">
                            {key != 0 && (
                              <div className="bg-gray-400 h-3 w-[1px]" />
                            )}
                            <span className="capitalize">{item}</span>
                          </div>
                        ))}
                      </div>
                      <h3 className="text-3xl capitalize h-[72px] line-clamp-2 font-normal text-black">
                        {project.title}
                      </h3>
                      {project?.price && (
                        <div className="font-acta">
                          Starting Price {project.price} 
                        </div>
                      )}
                    </section>
                    <div className="w-full h-[1px] bg-gray-100" />
                    <div className="space-y-2 font-acta">
                      <div className="flex items-center gap-x-3">
                        <img
                          src="/assets/icons/location.svg"
                          className="w-5 aspect-square"
                          alt={project.location}
                        />
                        <div className="line-clamp-1 capitalize leading-6">
                          {project.location}
                        </div>
                      </div>
                      <section className="flex items-center gap-3">
                        <div className="flex items-center gap-x-2">
                          <img
                            src="/assets/images/aminities/bed.svg"
                            className="w-5 aspect-square"
                            alt={`beds ${project.beds}`}
                          />
                          <div className="flex items-center gap-1">
                            <span>{project.beds}</span>
                          </div>
                          <button data-state="closed">
                            <img
                              src="/assets/icons/info.svg"
                              className="font-benton w-5 h-5 mb-1 rounded-full text-sm opacity-70"
                              alt="more info"
                            />
                          </button>
                        </div>
                        <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                        <div className="flex items-center gap-x-3.5 capitalize">
                          {project.lifestyle}
                        </div>
                      </section>
                    </div>
                  </section>
                </div>
              ))
            : " Projects not available"}
        </div>
      </section>
      <Footer />
    </>
  );
}
