import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="">
        <div className="container">
          <div id="content-full">
            <article id="content" className="hfeed">
              <div>
                <div className="ip-about-inner-wrap">
                  <div className="flex">
                    <div className="basis-1/2">
                      <div className="ip-about-sec1-text">
                        <div className="!text-sm !mb-4 !m-0 !p-0 max-w-md !font-normal  font-benton">
                          Bringing expertise to world's elite with{" "}
                          <strong> Dubai Sotheby's International Realty</strong>
                        </div>
                        <div className="ip-about-sec1-text-title wow fadeInRight !capitalize">
                          Shoaib
                          <div className="!text-sothebys-blue">Shahid</div>
                        </div>

                        <div className="ip-about-sec1-text-excerpt wow fadeInRight">
                          Shoaib Sahid is a highly esteemed global real estate
                          consultant who has over fifteen years experience in
                          international sales, business development and has
                          overseen a staggering 1.5 billion USD worth of
                          property sales. Shoaib's incredible list of
                          achievements has resulted in multiple awards, and saw
                          him rank as the top earner for Christie's
                          International Real Estate for three consecutive years.
                          <h2 className="text-2xl !mt-3">
                            <strong>Expansion. Always, in all ways.</strong>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="basis-1/2">
                      <div className="">
                        <img
                          alt="Shaoib Shahid"
                          className=" lazyloaded"
                          src="/assets/about-img.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <section className="pt-8 md:py-12   flex items-center">
                    <div className="container flex flex-col ">
                      <div className="flex items-center md:justify-left   ">
                        <hr className="hidden lg:block !mr-8 w-[200px] border-none" />

                        <h1 className="text-4xl tracking-normal text-center    md:text-5xl font-normal !mb-4 md:!mb-10 text-sothebys-blue">
                          Dubai Sotheby's International Realty ®
                        </h1>
                      </div>
                      <div className="flex items-center md:justify-left">
                        <hr className="hidden md:block !mr-8 w-[200px] border-sothebys-blue border-b-1" />
                        <div className="font-acta tracking-normal text-md md:text-xl text-left font-normal md:max-w-4xl p-2 md:p-0">
                          Founded in 1976, Sotheby's International Realty has
                          always been a highly sought-after name for the world's
                          wealthiest individuals when it comes to luxury
                          property and today our ever-expanding network includes
                          over 26,500 property consultants in 1,115 offices
                          across 84 countries and territories. With our
                          exclusive connections and international reach, we are
                          the ideal partner for buying and selling the world's
                          most beautiful homes.
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="md:py-12 text-center ">
                    <div className="container   flex justify-center items-center py-12 md:!py-2 pr-4">
                      <div className="w-1/2 pl-2 md:!pl-0 md:!pr-8">
                        <h2 className="text-2xl md:text-3xl tracking-normal  !mb-4 text-left font-normal text-sothebys-blue">
                          Global Reach, Local Expertise
                        </h2>
                        <div className="font-acta font-normal text-md md:text-lg text-gray-700 text-left md:max-w-lg">
                          <div className="tracking-normal">
                            Offering unrivalled access to distinctive properties
                            and qualified people around the world. Delivering
                            exceptional service in the luxury real estate market
                            with a trusted global network.
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 pl-8 tracking-normal">
                        <div className="grid md:grid-cols-2 gap-2 md:gap-4 text-left text-sothebys-blue">
                          <div className="mb-4">
                            <div className="text-2xl md:text-4xl font-acta font-normal">
                              1,115
                            </div>
                            <div className="text-xs md:text-md font-benton ">
                              OFFICES WORLDWIDE
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-2xl md:text-4xl font-acta font-normal">
                              26,500
                            </div>
                            <div className="text-xs md:text-md font-benton">
                              SALES ASSOCIATES
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-2xl md:text-4xl font-acta font-normal">
                              84
                            </div>
                            <div className="text-xs md:text-md font-benton">
                              COUNTRIES &amp; TERRITORIES
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="text-2xl md:text-4xl font-acta font-normal">
                              $143 Billion
                            </div>
                            <div className="text-xs md:text-md font-benton">
                              ANNUAL SALES
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="py-2 tracking-normal">
                    <div className="contaier lg:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#112548]">
                      <div className="md:col-span-2">
                        <img
                          src="https://d196t24mb8gljn.cloudfront.net/sothebys-assets/about-us-a.jpg"
                          alt="Image"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-normal !mb-2 text-[#ffffff]">
                          Unrivalled <span className="">Expertise</span>{" "}
                          Wherever In The World You Need It To Be
                        </h2>
                        <div className="p-2 md:p-0 font-benton my-2 text-left text-white text-sm">
                          Dubai Sotheby's International Realty is part of one of
                          the world's most respected luxury real estate brands
                          and is committed to delivering extraordinary results
                          through our local expertise, global footprint and
                          exclusive network.
                        </div>
                        <div className="p-2 md:p-0 font-benton text-left text-white text-sm">
                          As well as a distinguished service and our commitment
                          to bespoke, individualised support for each client, we
                          also employ superior strategic marketing and state of
                          the art technology solutions, so that your luxury
                          property is put front, right and center, capturing the
                          attention of buyers that matter most.
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="py-2 tracking-normal">
                    <div className="contaier lg:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border border-sothebys-blue">
                      <div className="md:col-span-2">
                        <img
                          src="https://d196t24mb8gljn.cloudfront.net/sothebys-assets/about-us-1.jpg"
                          alt="Image"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="md:col-span-1 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-normal !mb-2 ">
                          Provenance To Be <br /> Proud Of
                        </h2>
                        <div className="!p-2 md:p-0 font-benton !my-2 text-left text-sm">
                          As part of the global powerhouse brand of Sotheby's,
                          the world's preeminent auction house, and Sotheby's
                          International Realty, our reputation for excellence is
                          unsurpassed. Our singular pedigree assures clients
                          that they are working with a trusted partner who can
                          provide best-in-class exposure and unmatched service.
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="py-2 tracking-normal">
                    <div className="contaier lg:mx-auto  bg-[#112548]">
                      <Image
                        src="/assets/aabout.jpg"
                        width="1800"
                        height="900"
                        alt="group"
                      />
                    </div>
                  </section>

                  <div className="ip-about-sec2 flex justify-between">
                    <div className=" col-left flex justify-end items-end">
                      <div className="">
                        <img
                          alt="Shaoib Shahid"
                          className=" lazyloaded"
                          src="/assets/shoaib.png"
                        />
                      </div>
                    </div>
                    <div className="ip-about-sec2-col col-right">
                      <div className="ip-about-sec2-text">
                        <div className="ip-about-sec2-text-heading wow fadeInUp !text-sothebys-blue">
                          Global Real Estate Consultant
                        </div>
                        <div
                          className="ip-about-sec2-text-excerpt wow fadeInRight"
                          data-wow-delay=".2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInRight",
                          }}
                        >
                          <p className="text-xs">
                            Shoaib specialises in off-plan properties and works
                            closely with large development companies, as well as
                            sourcing prime land for private developers. He also
                            works as a luxury real estate consultant. Renowned
                            for finding the most prestigious properties located
                            in highly exclusive locations, and continuously
                            delivering exceptional results, these factors have
                            led to an incredible list of high-net-worth clients
                            who laud Shoaib's expert knowledge, keen eye for
                            detail, and unique ability to see a project through
                            from inception to completion resulting in a lasting
                            impact in the world of luxury real estate.
                          </p>

                          <p className="text-xs">
                            Shoaib specialises in off-plan properties and works
                            closely with large development companies, as well as
                            sourcing prime land for private developers. He also
                            works as a luxury real estate consultant. Renowned
                            for finding the most prestigious properties located
                            in highly exclusive locations, and continuously
                            delivering exceptional results, these factors have
                            led to an incredible list of high-net-worth clients
                            who laud Shoaib's expert knowledge, keen eye for
                            detail, and unique ability to see a project through
                            from inception to completion resulting in a lasting
                            impact in the world of luxury real estate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ip-about-sec3 ">
                    <div className="ip-about-sec3-inner-wrap flex flex-col md:flex-row">
                      <div className="ip-about-sec3-inner-col col-left">
                        <div className="ip-about-sec3-text">
                          <div className="ip-about-sec3-text-heading wow fadeInUp !text-sothebys-blue">
                            Media Mogul
                          </div>
                          <div className="ip-about-sec3-text-excerpt wow fadeInLeft">
                            <p>
                              Shaoib Shahid is known as a star of Bravo's
                              Emmy-nominated Million Dollar Listing New York,
                              its spin-off show Sell It Like Shaoib Shahid, and
                              for his appearance in the film While We're Young
                              alongside Ben Stiller, Naomi Watts, and Adam
                              Driver.{" "}
                            </p>
                            <p>
                              Shaoib Shahid is a frequent guest on broadcast,
                              cable, and digital news networks, including NBC,
                              ABC, CNBC, CNN, Buzzfeed, and others. He is also a
                              contributor to Forbes, where he writes a column
                              about real estate, sales, and branding.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ip-about-sec3-inner-col col-right">
                        <div className="">
                          <Image
                            alt="Shaoib Shahid"
                            width={500}
                            height={900}
                            src="/assets/c2.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-ip-about-sec4">
                    <div className="sec-inner-wrapper flex ">
                      <div className="sec-col left">
                        <div className="sec-photo">
                          <canvas
                            width={717}
                            height={966}
                            style={{
                              backgroundImage: "url('/assets/about-img.jpg')",
                            }}
                          />{" "}
                        </div>
                      </div>
                      <div className="sec-col right">
                        <div className="ip-about-sec4-text-heading wow fadeInUp !text-sothebys-blue">
                          Community Leader
                        </div>
                        <div className="ip-about-sec4-text-excerpt wow fadeInLeft">
                          <p>
                            Shaoib Shahid is focused on developing inspiring
                            sales and lifestyle communities through education
                            and writing. His best-selling book and innovative
                            real estate sales course of the same name, Sell It
                            Like Shaoib Shahid, are inside looks at all of
                            Shaoib Shahid's sales strategies and techniques.{" "}
                          </p>
                          <p>
                            Big Money Energy, which began as a weekly newsletter
                            in 2019, is now a full-fledged community with
                            hundreds of thousands of subscribers and a companion
                            book focused on helping individuals tap into their
                            inner confidence and positive energy to change their
                            lives.{" "}
                          </p>
                          <p>
                            The purpose of both initiatives is to give others
                            the roadmap Shaoib Shahid used to go from struggling
                            actor and novice real estate agent to leader of a
                            multi-hundred-million-dollar sales team and CEO of
                            the most followed brokerage brand in the world.{" "}
                          </p>
                          <p>
                            Shaoib Shahid is an active supporter of Project
                            Sunshine and City Harvest, among others.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new-ip-about-sec5">
                    <div className="sec-inner-wrapper">
                      <div className="sec-col right">
                        <div className="ip-about-sec5-text-heading wow fadeInUp !text-sothebys-blue">
                          Personal Life
                        </div>
                        <div className="ip-about-sec5-text-excerpt wow fadeInLeft">
                          <p>
                            Shoaib Shahid's life is enriched by the presence of
                            his three beloved sons, Aayyan, Shayyan, and Arhaan.
                            Blessed with boundless energy and mischief, they
                            bring joy and laughter to every corner of their
                            home. Together, they navigate life's adventures,
                            creating cherished memories and forming unbreakable
                            bonds. In the midst of his professional endeavors,
                            Shoaib finds solace and fulfillment in the warmth of
                            his family life
                          </p>
                        </div>
                      </div>
                      <div className="sec-col left">
                        <div className="sec-photo">
                          <Image
                            src="/assets/family1.jpg"
                            width={500}
                            alt="image"
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="clearfix" />
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}
