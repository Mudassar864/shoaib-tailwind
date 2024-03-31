import HeaderBlack from "@/app/ui/headerBlack";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <section className="container !mx-auto my-4">
        <div className="py-3 md:py-6 flex items-center justify-between font-benton">
          <div className="flex items-center text-sm font-normal text-sothebys-blue">
            <h1 className="font-benton font-medium text-lg">
              Off-Plan Projects in UAE
            </h1>
            <span className="font-medium text-gray-400 text-base ml-2">
              (project number)
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[43px] gap-y-[20px] md:gap-y-[35px] xl:gap-y-[50px]">
          <div className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1">
            <Link
              area-label="Project Baccarat Hotel and Residences"
              href="/off-plan-projects/baccarat-hotel-and-residences-downtown-dubai/"
            >
              <div className="absolute ml-4 mt-5 z-10 flex flex-col items-start gap-y-2">
                <div className="bg-white px-2 py-1 text-xs font-normal rounded-[4px] font-benton">
                  2026 Q4 H/O
                </div>
                <div className="bg-sothebys-blue text-white px-2 py-1 text-xs font-medium rounded-[4px] font-benton">
                  Off-Plan
                </div>
              </div>

              <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full h-[350px]">
                <div
                  className="swiper-wrapper"
                >
                  
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/featureBack.jpg"
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
                  <div className="flex items-center gap-x-2">
                    <span>Penthouse</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-gray-400 h-3 w-[1px]" />
                    <span>Apartment</span>
                  </div>
                </div>
                <h3 className="text-3xl h-[72px] line-clamp-2 font-normal">
                  Baccarat Hotel and Residences
                </h3>
                <div className="font-acta">Starting Price 21,000,000 AED</div>
              </section>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="space-y-2 font-acta">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/assets/icons/location.svg"
                    className="w-5 aspect-square"
                    alt="location Dubai Downtown Dubai, Burj Khalifa Area"
                  />
                  <div className="line-clamp-1 leading-6">
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </div>
                </div>
                <section className="flex items-center gap-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/assets/images/aminities/bed.svg"
                      className="w-5 aspect-square"
                      alt="beds 2,3,4,5"
                    />
                    <div className="flex items-center gap-1">
                      <div>
                        <span>2</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>3</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>4</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>5</span>
                      </div>
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
                  <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                  <div className="flex items-center gap-x-3.5">Luxurious</div>
                </section>
              </div>
            </section>
          </div>
          <div className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1">
            <Link
              area-label="Project Baccarat Hotel and Residences"
              href="/off-plan-projects/baccarat-hotel-and-residences-downtown-dubai/"
            >
              <div className="absolute ml-4 mt-5 z-10 flex flex-col items-start gap-y-2">
                <div className="bg-white px-2 py-1 text-xs font-normal rounded-[4px] font-benton">
                  2026 Q4 H/O
                </div>
                <div className="bg-sothebys-blue text-white px-2 py-1 text-xs font-medium rounded-[4px] font-benton">
                  Off-Plan
                </div>
              </div>

              <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full h-[350px]">
                <div
                  className="swiper-wrapper"
                >
                  
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/featureBack.jpg"
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
                  <div className="flex items-center gap-x-2">
                    <span>Penthouse</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-gray-400 h-3 w-[1px]" />
                    <span>Apartment</span>
                  </div>
                </div>
                <h3 className="text-3xl h-[72px] line-clamp-2 font-normal">
                  Baccarat Hotel and Residences
                </h3>
                <div className="font-acta">Starting Price 21,000,000 AED</div>
              </section>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="space-y-2 font-acta">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/assets/icons/location.svg"
                    className="w-5 aspect-square"
                    alt="location Dubai Downtown Dubai, Burj Khalifa Area"
                  />
                  <div className="line-clamp-1 leading-6">
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </div>
                </div>
                <section className="flex items-center gap-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/assets/images/aminities/bed.svg"
                      className="w-5 aspect-square"
                      alt="beds 2,3,4,5"
                    />
                    <div className="flex items-center gap-1">
                      <div>
                        <span>2</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>3</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>4</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>5</span>
                      </div>
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
                  <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                  <div className="flex items-center gap-x-3.5">Luxurious</div>
                </section>
              </div>
            </section>
          </div>
          <div className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1">
            <Link
              area-label="Project Baccarat Hotel and Residences"
              href="/off-plan-projects/baccarat-hotel-and-residences-downtown-dubai/"
            >
              <div className="absolute ml-4 mt-5 z-10 flex flex-col items-start gap-y-2">
                <div className="bg-white px-2 py-1 text-xs font-normal rounded-[4px] font-benton">
                  2026 Q4 H/O
                </div>
                <div className="bg-sothebys-blue text-white px-2 py-1 text-xs font-medium rounded-[4px] font-benton">
                  Off-Plan
                </div>
              </div>

              <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full h-[350px]">
                <div
                  className="swiper-wrapper"
                >
                  
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/featureBack.jpg"
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
                  <div className="flex items-center gap-x-2">
                    <span>Penthouse</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-gray-400 h-3 w-[1px]" />
                    <span>Apartment</span>
                  </div>
                </div>
                <h3 className="text-3xl h-[72px] line-clamp-2 font-normal">
                  Baccarat Hotel and Residences
                </h3>
                <div className="font-acta">Starting Price 21,000,000 AED</div>
              </section>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="space-y-2 font-acta">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/assets/icons/location.svg"
                    className="w-5 aspect-square"
                    alt="location Dubai Downtown Dubai, Burj Khalifa Area"
                  />
                  <div className="line-clamp-1 leading-6">
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </div>
                </div>
                <section className="flex items-center gap-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/assets/images/aminities/bed.svg"
                      className="w-5 aspect-square"
                      alt="beds 2,3,4,5"
                    />
                    <div className="flex items-center gap-1">
                      <div>
                        <span>2</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>3</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>4</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>5</span>
                      </div>
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
                  <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                  <div className="flex items-center gap-x-3.5">Luxurious</div>
                </section>
              </div>
            </section>
          </div>
          <div className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1">
            <Link
              area-label="Project Baccarat Hotel and Residences"
              href="/off-plan-projects/baccarat-hotel-and-residences-downtown-dubai/"
            >
              <div className="absolute ml-4 mt-5 z-10 flex flex-col items-start gap-y-2">
                <div className="bg-white px-2 py-1 text-xs font-normal rounded-[4px] font-benton">
                  2026 Q4 H/O
                </div>
                <div className="bg-sothebys-blue text-white px-2 py-1 text-xs font-medium rounded-[4px] font-benton">
                  Off-Plan
                </div>
              </div>

              <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full h-[350px]">
                <div
                  className="swiper-wrapper"
                >
                  
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/featureBack.jpg"
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
                  <div className="flex items-center gap-x-2">
                    <span>Penthouse</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-gray-400 h-3 w-[1px]" />
                    <span>Apartment</span>
                  </div>
                </div>
                <h3 className="text-3xl h-[72px] line-clamp-2 font-normal">
                  Baccarat Hotel and Residences
                </h3>
                <div className="font-acta">Starting Price 21,000,000 AED</div>
              </section>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="space-y-2 font-acta">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/assets/icons/location.svg"
                    className="w-5 aspect-square"
                    alt="location Dubai Downtown Dubai, Burj Khalifa Area"
                  />
                  <div className="line-clamp-1 leading-6">
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </div>
                </div>
                <section className="flex items-center gap-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/assets/images/aminities/bed.svg"
                      className="w-5 aspect-square"
                      alt="beds 2,3,4,5"
                    />
                    <div className="flex items-center gap-1">
                      <div>
                        <span>2</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>3</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>4</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>5</span>
                      </div>
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
                  <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                  <div className="flex items-center gap-x-3.5">Luxurious</div>
                </section>
              </div>
            </section>
          </div>
          <div className="relative bg-white border border-gray-100 shadow-sm w-full h-full transition-all ease-in-out duration-300 hover:shadow-md hover:-translate-y-1">
            <Link
              area-label="Project Baccarat Hotel and Residences"
              href="/off-plan-projects/baccarat-hotel-and-residences-downtown-dubai/"
            >
              <div className="absolute ml-4 mt-5 z-10 flex flex-col items-start gap-y-2">
                <div className="bg-white px-2 py-1 text-xs font-normal rounded-[4px] font-benton">
                  2026 Q4 H/O
                </div>
                <div className="bg-sothebys-blue text-white px-2 py-1 text-xs font-medium rounded-[4px] font-benton">
                  Off-Plan
                </div>
              </div>

              <div className="swiper swiper-virtual swiper-initialized swiper-horizontal swiper-watch-progress w-full h-[350px]">
                <div
                  className="swiper-wrapper"
                >
                  
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src="/assets/featureBack.jpg"
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
                  <div className="flex items-center gap-x-2">
                    <span>Penthouse</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="bg-gray-400 h-3 w-[1px]" />
                    <span>Apartment</span>
                  </div>
                </div>
                <h3 className="text-3xl h-[72px] line-clamp-2 font-normal">
                  Baccarat Hotel and Residences
                </h3>
                <div className="font-acta">Starting Price 21,000,000 AED</div>
              </section>
              <div className="w-full h-[1px] bg-gray-100" />
              <div className="space-y-2 font-acta">
                <div className="flex items-center gap-x-3">
                  <img
                    src="/assets/icons/location.svg"
                    className="w-5 aspect-square"
                    alt="location Dubai Downtown Dubai, Burj Khalifa Area"
                  />
                  <div className="line-clamp-1 leading-6">
                    Burj Khalifa Area, Downtown Dubai, Dubai
                  </div>
                </div>
                <section className="flex items-center gap-3">
                  <div className="flex items-center gap-x-2">
                    <img
                      src="/assets/images/aminities/bed.svg"
                      className="w-5 aspect-square"
                      alt="beds 2,3,4,5"
                    />
                    <div className="flex items-center gap-1">
                      <div>
                        <span>2</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>3</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>4</span>
                      </div>
                      <div>
                        <span>, </span>
                        <span>5</span>
                      </div>
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
                  <div className="bg-gray-300 h-3 w-[1px] rounded-full" />
                  <div className="flex items-center gap-x-3.5">Luxurious</div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
