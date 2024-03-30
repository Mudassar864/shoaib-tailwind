import HeaderBlack from "@/app/ui/headerBlack";
import Image from "next/image";
import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { CarouselSize } from "@/app/ui/CarouselSize";
export default function page() {
  return (
    <>
      <HeaderBlack />

      <div className="single-property max-w-7xl mx-auto font-acta my-8">
        <div>
          <div style={{ height: 30 }} />
          <div className="top-property-info ">
            <div className="container upper-section !mx-auto">
              <div className="container mb-5 lg:mb-[5px] mt-[0] lg:-mt-[15px] flex-col lg:flex-row flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-center lg:text-left property-info-fixed">
                    <span className="text-[#1D1D1B] text-[19px] lg:text-[18px] leading-[30px] mt-[2px] font-normal tracking-wide font-benton">
                      Four Seasons Private Residences DIFC{/* */}, {/* */}Dubai
                    </span>
                  </div>
                  <div className="flex justify-between mt-[6px] lg:mt-0">
                    <div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 lg:gap-x-7 leading-5 lg:leading-[22px] font-benton font-normal text-black capitalize tracking-[1.5px] text-[14px] mb-[12px] lg:mb-[3px] justify-center lg:justify-start">
                        <div>
                          <span className="text-xs">price from </span>33,600,000
                          AED
                        </div>
                        <div className="flex items-center gap-x-2">
                          <img
                            src="/assets/icons/bed.svg"
                            className="w-5 aspect-square"
                            alt="beds 3,4,5"
                          />
                          <div className="flex items-center gap-1">
                            <div>
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
                        <div className="flex items-center gap-x-3.5">
                          <img
                            src="/assets/icons/area.svg"
                            className="w-4 ml-[2px] aspect-square"
                            alt="area"
                          />
                          <div className="leading-6">4,853 - 18,440 SQ.FT</div>
                        </div>
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
                    <div>4</div>)
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
            <CarouselSize />
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
                        href="/development"
                        className="underline underline-offset-4 decoration-transparent  transition-colors duration-200 ease-linear"
                      >
                        Development
                      </a>
                      <span className="px-[1px]">»</span>
                    </div>
                    <div className="space-x-[2px]">
                      <a
                        href="/development"
                        className="underline underline-offset-4 decoration-transparent  transition-colors duration-200 ease-linear"
                      >
                        Project nme here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="hidden lg:block">
                    <h1 className="text-[32px] leading-[38px] tracking-wide font-normal">
                      Four Seasons Private Residences DIFC
                    </h1>
                  </div>
                  <div className="lg:hidden mt-5">
                    <h1 className="text-2xl leading-[38px] tracking-wide font-normal">
                      Four Seasons Private Residences DIFC
                    </h1>
                  </div>
                  <div className="flex items-center gap-x-2 py-3 ">
                    <div className="flex items-center gap-x-2">
                      <a
                        className="text-sm font-benton text-gray-500 underline decoration-gray-400 hover:text-black hover:decoration-black transition-colors duration-200 ease-linear"
                        href="/development"
                      >
                        Apartment
                      </a>
                      <div className="h-3 w-[1px] bg-gray-400" />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <a
                        className="text-sm font-benton text-gray-500 underline decoration-gray-400 hover:text-black hover:decoration-black transition-colors duration-200 ease-linear"
                        href="/development"
                      >
                        Penthouse
                      </a>
                    </div>
                  </div>
                  <div
                    data-content="true"
                    className="w-full pt-4 md:pt-10 md:data-[content=true]:pt-0 md:text-base tracking-wide"
                  >
                    <p className="py-2">
                      <strong className="font-benton">
                        Four Seasons Private Residences, DIFC
                      </strong>
                    </p>
                    <p className="py-2">
                      Welcome to an address that combines the prestige of one of
                      the world's most famous hospitality brands with the Middle
                      East's biggest financial centre. The Four Seasons Private
                      Residences DIFC is a rare reimagining of the DIFC skyline
                      offering 50 exceptional residences and two penthouses
                      within an iconic new development.&nbsp;Experience the
                      privilege of the Four Seasons' hospitality every day in
                      the heart of DIFC, surrounded by the vibrant buzz of Gate
                      Village and the lifestyle offerings of Gate Avenue,
                      inspiring an urban lifestyle unlike no other.&nbsp;
                    </p>
                    <p className="py-2">
                      <strong className="font-benton">
                        A Curated Lifestyle
                      </strong>
                    </p>
                    <p className="py-2">
                      Bringing years of experience in catering to guests around
                      the world, Four Seasons has brought its hospitality
                      expertise to DIFC for those who want to experience an
                      effortless lifestyle at the hands of the Four Seasons
                      team.&nbsp;From managing your residence in your absence to
                      ensuring a fully stocked fridge upon your return,
                      arranging private jet travel to even tending to your furry
                      friends, the Four Seasons team is committed to creating a
                      personalised vision of home that reflects your unique
                      lifestyle.
                    </p>
                    <p className="py-2">
                      With a comprehensive approach customised for each
                      resident, life at Four Seasons Private Residences is often
                      characterised by one word: seamless. From unmatched
                      service to expert management to the exquisite homes
                      themselves, Four Seasons has mastered the art of crafting
                      a curated lifestyle. No detail is too small, and residents
                      can anticipate personalised service and a sense of
                      belonging to a community that genuinely cares about their
                      well-being.
                    </p>
                    <p className="py-2">
                      <strong className="font-benton">The Design</strong>
                    </p>
                    <p className="py-2">
                      Designed by acclaimed British architect, Sir David
                      Chipperfield to provide the centre of Dubai with a new
                      urban heart – four geometrically aligned towers will grace
                      DIFC’s vibrant skyline offering an envious lifestyle in a
                      location brimming with art and culture.&nbsp; Rising from
                      a raised plinth, the four buildings stand united yet
                      distinct. Their sleek city-facing facades contrast with
                      inward curves embracing a spacious garden square lined
                      with tempting eateries. Complementing Sir David
                      Chipperfield's visionary architecture are interiors by
                      Tihany Design, creating sanctuaries where comfort is
                      intricately woven into the design, and luxury seamlessly
                      combines with stylish functionality.
                    </p>
                    <p className="py-2">
                      <strong className="font-benton">
                        Four Seasons Private Residences
                      </strong>
                    </p>
                    <p className="py-2">
                      Four Seasons Private Residences DIFC boasts a premier
                      location overlooking lush gardens arranged in an
                      oasis-like setting on elevated platforms. These gardens
                      not only provide tranquil green spaces but also offer
                      sweeping vistas of Downtown Dubai, the Burj Khalifa to the
                      south, and Emirates Towers to the north. With such
                      breathtaking views, residents enjoy privileged access to
                      the numerous attractions within the district.
                    </p>
                    <p className="py-2">
                      There is an option to choose between three and
                      four-bedroom apartments with views of the DIFC skyline and
                      Za’abeel, offering a sophisticated lifestyle amidst the
                      vibrance of DIFC. Two penthouses – one a half floor and
                      one full floor – epitomise the excellence of the Four
                      Seasons, offering the ultimate residence for the
                      discerning few. By merging the prestigious lifestyle
                      associated with Four Seasons and the professional energy
                      of DIFC, this new development aims to reimagine the
                      corporate ecosystem, providing a seamless integration of
                      work, leisure, and luxury living in Dubai's bustling
                      centre.
                    </p>
                    <p className="py-2">
                      <strong className="font-benton">Amenities</strong>
                    </p>
                    <p className="py-2">
                      At Level 12, residents enjoy access to a terrace and
                      outdoor swimming pool with a pool bar, alongside a spa and
                      wellness facility featuring changing rooms equipped with a
                      sauna &amp; steam room. Keep fit at the fully equipped gym
                      or opt for a private workout in the movement studio. Enjoy
                      leisure activities with amenities such as the golf
                      simulator, children’s pool, children’s playroom, and
                      theatre. For a refined experience, unwind at the cigar
                      lounge or host events in the versatile lounge spaces and
                      meeting room.
                    </p>
                    <p className="py-2">
                      Additional conveniences include a driver room, butler
                      room, Director of Residences, Four Seasons Residential
                      Concierge, and 24-hour Security Reception Service. Valet
                      parking, mail and package acceptance ensure seamless
                      living. Residents can also benefit from a la carte
                      services such as housekeeping, private chef service, and
                      catering. Pet care, arrival services, transportation
                      assistance, and gardening services are also available. Dry
                      cleaning and laundry, childcare services, and personal
                      training cater to various needs. Plant care and florist
                      services add a touch of greenery, while in-residence spa
                      treatments, in-residence technology assistance, and
                      technical service and repairs offer comprehensive support.
                    </p>
                    <p className="py-2">
                      <strong className="font-benton">Connectivity</strong>
                    </p>
                    <p className="py-2">
                      Claiming the district’s prime location adjacent to the
                      Four Seasons Hotel, the new building lies five minutes
                      from Burj Khalifa and 15 minutes from Jumeirah Beach. DIFC
                      is a global financial hub with mesmerising architecture
                      and serves as a neighbourhood to some of the finest
                      restaurants in the city along with a range of art
                      galleries and curated high-end retail.&nbsp;Being at the
                      centre of Dubai allows residents convenience when
                      travelling to any part of Dubai, with Sheikh Zayed Rd.
                      just a few moments away&nbsp;
                    </p>
                  </div>
                  <div className="lg:hidden">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:R2gj96m:"
                      data-state="closed"
                      className="duration-400 ease-in-out transition-colors border  text-black bg-white px-8 py-1.5 font-normal tracking-wider mt-5"
                    >
                      Read More
                    </button>
                  </div>
                  <p className="hidden mt-5 cursor-pointer font-normal tracking-wider underline transition-colors ease-in-out lg:block duration-400 hover:text-black text-black/90 font-acta underline-offset-2">
                    Read Less
                  </p>
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
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:R2d396m:"
                        data-state="closed"
                        className="font-acta font-normal w-full text-start text-base bg-transparent text-black hover:bg-transparent justify-start p-0 h-auto underline underline-offset-2"
                      >
                        Show More ...
                      </button>
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
                      <a
                        data-exists="true"
                        className="data-[exists=false]:hidden underline underline-offset-4 decoration-slate-400 transition-colors duration-300 ease-in-out hover:decoration-black"
                        href="/development"
                      >
                        Dubai
                      </a>
                      <a
                        data-exists="true"
                        className="data-[exists=false]:hidden underline underline-offset-4 decoration-slate-400 transition-colors duration-300 ease-in-out hover:decoration-black"
                        href="/development"
                      >
                        , {/* */}DIFC
                      </a>
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
                      Luxurious
                    </div>
                  </div>
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
                      2027
                    </div>
                  </div>
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
                    Enquiry about {/* */}Four Seasons Private Residences DIFC
                  </div>
                  <form
                    className="w-full max-w-[461px] text-[#2A2A2A]"
                    data-hs-cf-bound="true"
                  >
                    <input
                      tabIndex={-1}
                      type="text"
                      name="fullName"
                      className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border "
                      placeholder="Full name"
                      defaultValue=""
                    />
                    <input
                      tabIndex={-1}
                      type="email"
                      name="email"
                      className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border"
                      placeholder="E-mail address"
                      defaultValue=""
                    />
                    <input
                      tabIndex={-1}
                      type="tel"
                      name="phone"
                      className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border"
                      placeholder="Phone"
                      defaultValue=""
                    />
                    <textarea
                      tabIndex={-1}
                      name="message"
                      className="request-information-field w-full h-[100px] rounded mb-8 md:mb-4 pl-3 pt-4 resize-none border"
                      placeholder="How can we help?"
                      defaultValue={""}
                    />
                    <div className="w-full flex items-center justify-center">
                      <button
                        type="submit"
                        id="submit-button"
                        data-center="true"
                        className="button w-fit px-7 py-3 !border-[#888888] border"
                      >
                        Submit enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
