import HeaderBlack from "@/app/ui/headerBlack";
import Image from "next/image";
import React from "react";
import { CarouselSize } from "@/app/ui/CarouselSize";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { AddForm } from "@/components/AddForm";
export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug) {
  const query = `
    *[_type == "offPlanProject" && slug.current == '${slug}'][0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function page({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <>
      <HeaderBlack />

      {data ? (
        <div className="single-property max-w-7xl mx-auto font-acta my-8">
          <div>
            <div style={{ height: 30 }} />
            <div className="top-property-info ">
              <div className="container upper-section !mx-auto">
                <div className="container mb-5 lg:mb-[5px] mt-[0] lg:-mt-[15px] flex-col lg:flex-row flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="text-center lg:text-left property-info-fixed">
                      <span className="text-[#1D1D1B] text-[19px] lg:text-[18px] leading-[30px] mt-[2px] font-normal tracking-wide font-benton">
                        {data.title}
                      </span>
                    </div>
                    <div className="flex justify-between mt-[6px] lg:mt-0">
                      <div>
                        <div className="flex flex-wrap gap-x-5 gap-y-1 lg:gap-x-7 leading-5 lg:leading-[22px] font-benton font-normal text-black capitalize tracking-[1.5px] text-[14px] mb-[12px] lg:mb-[3px] justify-center lg:justify-start">
                          {data.price > 0 && (
                            <div>
                              <span className="text-xs">price from </span>{" "}
                              {data.price}
                              AED
                            </div>
                          )}
                          <div className="flex items-center gap-x-2">
                            <img
                              src="/assets/icons/bed.svg"
                              className="w-5 aspect-square"
                              alt="beds 3,4,5"
                            />
                            <div className="flex items-center gap-1">
                              <span>{data.beds}</span>
                            </div>
                            Beds
                            <button data-state="closed">
                              <img
                                src="/assets/icons/info.svg"
                                className="font-benton w-5 h-5 mb-1 rounded-full text-sm opacity-70"
                                alt="more info"
                              />
                            </button>
                          </div>
                          {data.area > 0 && (
                            <div className="flex items-center gap-x-3.5">
                              <img
                                src="/assets/icons/area.svg"
                                className="w-4 ml-[2px] aspect-square"
                                alt="area"
                              />
                              <div className="leading-6">{data.area}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:ml-[30px] items-center property-bottom-links">
                    <div
                      data-hidden="false"
                      className="data-[hidden=true]:hidden flex hover:opacity-80 transition-opacity duration-300 ease-in-out pr-4 cursor-pointer"
                    >
                      <img
                        alt="gallery"
                        loading="lazy"
                        width={21}
                        height={21}
                        decoding="async"
                        data-nimg={1}
                        className="mr-2.5"
                        style={{ color: "transparent" }}
                        src="/assets/icons/gallery.svg"
                      />
                      <span className="hidden sm:block">Gallery</span> (
                      <div>{data.images.length}</div>)
                    </div>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R2kp6m:"
                      data-state="closed"
                      id="request-information"
                      className="button !py-[7px] !px-[20px] !border-[#888888] border"
                    >
                      Request information
                    </button>
                    <div className="flex items-center justify-center ">
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:R3kp6m:"
                        data-state="closed"
                      >
                        <img
                          src="/assets/icons/social/share.svg"
                          alt="share"
                          className="pl-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-full xl:max-w-[1440px] mx-auto mt-4 relative">
              <CarouselSize images={data.images} />
            </div>
          </div>
          <div className="flex justify-center container">
            <div className="w-full max-w-[1634px] grid grid-cols-1 lg:grid-cols-10 items-center lg:items-start justify-between mt-[50px]">
              <section className="!mx-auto w-full col-span-1 lg:col-span-7 flex justify-center lg:justify-start lg:pr-8">
                <div className="w-full">
                  <div className="flex items-center pb-5">
                    <div className="flex items-center gap-x-2 flex-wrap gap-y-2 font-benton text-sm">
                      <div className="space-x-[2px]">
                        <a
                          href="/"
                          className="underline underline-offset-4 decoration-transparent  transition-colors duration-200 ease-linear"
                        >
                          Home
                        </a>
                        <span className="px-[1px]">»</span>
                      </div>
                      <div className="space-x-[2px]">
                        <a
                          href="/off-plan-projects"
                          className="capitalize underline underline-offset-4 decoration-transparent  transition-colors duration-200 ease-linear"
                        >
                          off plan projects
                        </a>
                        <span className="px-[1px]">»</span>
                      </div>
                      <div className="space-x-[2px]">
                        <a
                          href={`/${data.slug.current}`}
                          className="underline underline-offset-4 decoration-transparent  transition-colors duration-200 ease-linear"
                        >
                          {data.title}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="hidden lg:block">
                      <h1 className="text-[32px] leading-[38px] tracking-wide font-normal">
                        {data.title}
                      </h1>
                    </div>
                    <div className="lg:hidden mt-5">
                      <h1 className="text-2xl leading-[38px] tracking-wide font-normal">
                        {data.title}
                      </h1>
                    </div>
                    <div className="flex items-center gap-x-2 py-3 ">
                      {data.category.map((item, key) => (
                        <div key={key} className="flex items-center gap-x-2">
                          <a
                            className="text-sm font-benton text-gray-500 underline decoration-gray-400 hover:text-black hover:decoration-black transition-colors duration-200 ease-linear"
                            href="/off-plan-projects"
                          >
                            {item}
                          </a>
                          {key < data.category.length - 1 && (
                            <div className="h-3 w-[1px] bg-gray-400" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div
                      data-content="true"
                      className="w-full pt-4 md:pt-10 md:data-[content=true]:pt-0 md:text-base tracking-wide content"
                    >
                      <PortableText value={data.content} />
                    </div>
                  </div>
                  <div className="w-full h-[1px] my-10 lg:my-16 bg-slate-300" />
                  <div className="w-full">
                    <div>
                      <div className="hidden lg:block">
                        <span className="text-[32px] leading-[38px] tracking-wide font-normal">
                          Features &amp; Amenities
                        </span>
                      </div>
                      <div className="lg:hidden mt-5">
                        <span className="text-2xl leading-[38px] tracking-wide font-normal">
                          Features &amp; Amenities
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-x-3 mt-4 md:mt-10 font-normal text-base sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6 md:gap-y-10 ">
                        <span className="font-acta flex items-center gap-x-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/assets/icons/amenities/Concierge.svg"
                          />{" "}
                          {/* */}24 Hour porter
                        </span>
                        <span className="font-acta flex items-center gap-x-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/assets/icons/amenities/Parking.svg"
                          />{" "}
                          {/* */}Covered Parking
                        </span>
                        <span className="font-acta flex items-center gap-x-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/assets/icons/amenities/Gym.svg"
                          />{" "}
                          {/* */}Shared Gym
                        </span>
                        <span className="font-acta flex items-center gap-x-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/assets/icons/amenities/SPA.svg"
                          />{" "}
                          {/* */}Shared Spa
                        </span>
                        <span className="font-acta flex items-center gap-x-3">
                          <img
                            alt="icon"
                            loading="lazy"
                            width={20}
                            height={20}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="/assets/icons/amenities/Concierge.svg"
                          />{" "}
                          {/* */}Concierge Service
                        </span>
                      </div>
                      <div className="w-full h-[1px] bg-gray-600 my-10 lg:my-16" />
                    </div>
                  </div>
                  <div className="flex md:items-center flex-col md:flex-row justify-between gap-y-10">
                    <div>
                      <div className="hidden lg:block">
                        <span className="text-[32px] leading-[38px] tracking-wide font-normal">
                          Location
                        </span>
                      </div>
                      <div className="lg:hidden mt-5">
                        <span className="text-2xl leading-[38px] tracking-wide font-normal">
                          Location
                        </span>
                      </div>
                      <div className="mt-10 font-normal text-lg w-full flex items-start justify-start gap-x-1 whitespace-nowrap  flex-wrap">
                        <Link
                          data-exists="true"
                          className="data-[exists=false]:hidden underline underline-offset-4 decoration-slate-400 transition-colors duration-300 ease-in-out hover:decoration-black"
                          href="/off-plan-projects"
                        >
                          {data.location}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] my-10 lg:my-16 bg-slate-300" />
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="hidden lg:block">
                        <span className="text-[32px] leading-[38px] tracking-wide font-normal">
                          Lifestyle
                        </span>
                      </div>
                      <div className="lg:hidden mt-5">
                        <span className="text-2xl leading-[38px] tracking-wide font-normal">
                          Lifestyle
                        </span>
                      </div>
                      <div className="mt-4 md:mt-10 font-normal text-xl">
                        {data.lifestyle}
                      </div>
                    </div>
                    {data.handover > 0 && (
                      <div>
                        <div className="hidden lg:block">
                          <span className="text-[32px] leading-[38px] tracking-wide font-normal">
                            Handover
                          </span>
                        </div>
                        <div className="lg:hidden mt-5">
                          <span className="text-2xl leading-[38px] tracking-wide font-normal">
                            Handover
                          </span>
                        </div>
                        <div className="mt-4 md:mt-10 font-normal text-xl">
                          {data.handover}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full h-[1px] my-10 lg:my-16 bg-slate-300" />
                  <div className="flex flex-col gap-y-8">
                    <div className="hidden lg:block">
                      <span className="text-[32px] leading-[38px] tracking-wide font-normal">
                        In Details
                      </span>
                    </div>
                    <div className="mt-5 lg:hidden">
                      <span className="text-2xl leading-[38px] tracking-wide font-normal">
                        In Details
                      </span>
                    </div>
                    <div className="flex items-center  gap-x-10 scrollbar-hide">
                      <div className="flex flex-col items-center gap-y-5">
                        <div className="relative flex items-center justify-center w-24 overflow-hidden rounded-full cursor-pointer aspect-square">
                          <img
                            alt="Gallery"
                            loading="lazy"
                            width={120}
                            height={120}
                            decoding="async"
                            data-nimg={1}
                            className="object-cover h-24"
                            style={{ color: "transparent" }}
                          />
                          <div className="absolute top-0 left-0 z-10 w-24 transition-all duration-300 ease-in-out rounded-full aspect-square bg-black/60 hover:bg-black/10">
                            <div className="flex items-center justify-center w-full h-full transition-opacity ease-in-out hover:opacity-0 duration-800">
                              <img
                                src="/assets/icons/gallery-project.svg"
                                alt="Gallery"
                                className="w-10 aspect-square"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          Gallery
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-y-5">
                        <div className="relative flex items-center justify-center w-24 overflow-hidden rounded-full cursor-pointer aspect-square">
                          <img
                            alt="Floorplan"
                            loading="lazy"
                            width={120}
                            height={120}
                            decoding="async"
                            data-nimg={1}
                            className="object-cover h-24"
                            style={{ color: "transparent" }}
                          />
                          <div className="absolute top-0 left-0 z-10 w-24 transition-all duration-300 ease-in-out rounded-full aspect-square bg-black/60 hover:bg-black/10">
                            <div className="flex items-center justify-center w-full h-full transition-opacity ease-in-out hover:opacity-0 duration-800">
                              <img
                                src="/assets/icons/floorplan-project.svg"
                                alt="Floorplan"
                                className="w-10 aspect-square"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          Floorplan
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:R9r96m:"
                    data-state="closed"
                    id="project-in-details-id"
                    className="hidden"
                  />
                </div>
              </section>
              <section className="pt-10 lg:pt-0 flex justify-start items-center flex-col lg:h-full lg:col-span-3 gap-y-10">
                <div className="lg:hidden text-xl">CONTACT AGENT</div>
                <div className="sticky top-[120px] space-y-5">
                  <div className=" max-w-md p-5 border border-gray-200 shadow-sm rounded-sm">
                    <div className="font-normal text-center pb-5 text-xl ">
                      Enquiry about {/* */}
                      {data.title}
                    </div>
                    <AddForm id={data._id} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">No Data found</div>
      )}
    </>
  );
}
