import HeaderBlack from "@/app/ui/headerBlack";
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
            <a
              area-label="Project Baccarat Hotel and Residences"
              href="/project/baccarat-hotel-and-residences-downtown-dubai/"
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
                  style={{
                    transitionDuration: "0ms",
                    transitionDelay: "0ms",
                    transform: "translate3d(-500px, 0px, 0px)",
                  }}
                >
                  <div
                    className="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={12}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/addcb2d5-61e3-4b3c-be05-df64f6f00023.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=6cdf4022ddaecddcd501753ea32117bbe038c4b16d5995680f94a1ffe951731d&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/3226829a-03d5-41df-b467-91cee534ad0a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=d79632e15fc99e4f12f4d7755e4c97f050fdd284d298a87eac2d7c534dd9533e&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-swiper-slide-index={1}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/555f1988-0360-49ea-bf53-1f1a0b6bc34f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=fad0bc4f39bb531d935f8f0952f3c2ec9bb056a770cbc7c6b569cbc07a62061b&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={2}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/18aab3a9-cb9b-482c-bb3e-81554b435902.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=7d1703d74aba5d62f6df614ffd2b5878a982ba6433b297e61753e9dbb0ee6a2e&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </a>
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
            <a
              area-label="Project Baccarat Hotel and Residences"
              href="/project/baccarat-hotel-and-residences-downtown-dubai/"
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
                  style={{
                    transitionDuration: "0ms",
                    transitionDelay: "0ms",
                    transform: "translate3d(-500px, 0px, 0px)",
                  }}
                >
                  <div
                    className="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={12}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/addcb2d5-61e3-4b3c-be05-df64f6f00023.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=6cdf4022ddaecddcd501753ea32117bbe038c4b16d5995680f94a1ffe951731d&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index={0}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/3226829a-03d5-41df-b467-91cee534ad0a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=d79632e15fc99e4f12f4d7755e4c97f050fdd284d298a87eac2d7c534dd9533e&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-swiper-slide-index={1}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/555f1988-0360-49ea-bf53-1f1a0b6bc34f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=fad0bc4f39bb531d935f8f0952f3c2ec9bb056a770cbc7c6b569cbc07a62061b&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="swiper-slide"
                    data-swiper-slide-index={2}
                    style={{ left: 0, width: 500 }}
                  >
                    <img
                      src="https://sothebysrealty.ae/cdn-cgi/image/format=auto,width=600,height=600,quality=90/https://sothebys-assets.s3.eu-west-2.amazonaws.com/18aab3a9-cb9b-482c-bb3e-81554b435902.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAVUGRI3I4W7JEORM2%2F20240330%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240330T123148Z&X-Amz-Expires=5000&X-Amz-Signature=7d1703d74aba5d62f6df614ffd2b5878a982ba6433b297e61753e9dbb0ee6a2e&X-Amz-SignedHeaders=host&x-id=GetObject"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </a>
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
