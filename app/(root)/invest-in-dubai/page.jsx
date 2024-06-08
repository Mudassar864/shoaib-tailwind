import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import HeaderSection from "@/app/ui/headerSection";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderSection />
      <div>
        <div className="relative">
          <img
            src="/assets/burj.jpg" // Replace with your image URL
            alt="Invest in Dubai"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Invest in Dubai
            </h1>
          </div>
        </div>
      </div>
      <section className="py-12  max-w-4xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-normal mb-4 font-benton">
            Welcome to the world's capital of ambition
          </h2>
          <p className="text-sm md:text-sm leading-10 font-benton text-gray-700  max-w-2xl">
            Dubai delivers efficiency, access to growth markets, security and a
            forward-looking ecosystem for accelerated growth. Dubai brings
            people, process and technology seamlessly together to create an
            agile foundation for every industry.
          </p>
        </div>
      </section>
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-benton font-normal">Why Dubai</h2>
        <div className="grid grid-cols-1 gap-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
            <div className="bg-[#005F66] rounded-xl p-4">
              <div className="flex items-center">
                <Image
                  src={"/assets/finance-money-fdi-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-4xl text-white font-benton font-bold ">
                  Global Financial Hub
                </h3>
              </div>
              <p className="m-4 text-white">
                Dubai's position at the centre of the world means professionals
                can manage markets in the far east and the Americas all within
                the same day - your new "power 8 till 8" time zone.
              </p>
            </div>
            <div className="bg-[#005F66] rounded-xl p-4">
              <div className="flex items-center gap-4 ">
                <Image
                  src={"/assets/money-bag-1-dirham-white-small-size.webp"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-4xl text-white font-benton font-bold ">
                  A magnet for businesses and investors
                </h3>
              </div>
              <p className="m-4 text-white">
                The world's leading companies, family offices, investment funds
                and entrepreneurs already call Dubai home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
            <div className="bg-[#005F66] rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/blockchain-business-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-4xl text-white font-benton font-bold text-center">
                  Connecting the world
                </h3>
              </div>
            </div>
            <div className="bg-[#005F66] rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/eligibility-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-4xl text-white font-benton font-bold text-center">
                  Global hub for talent
                </h3>
              </div>
            </div>
            <div className="bg-[#005F66]  rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/technology-and-ict-2-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-4xl text-white font-benton font-bold text-center">
                  Future Forward
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-benton font-normal my-4">
          Dubai your global partner of choice
        </h2>
        <span className="text-sm md:text-sm leading-10 font-benton text-gray-700 max-w-2xl">
          Dubai is a magnet for foreign investment and a fast-growing hub for
          investors and entrepreneurs. Learn more about Dubai's pro-business
          environment built for growth.
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-4">
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/innovation-technology-business-in-dubai.webp"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">
              A global hub for start-ups and entrepreneurs
            </p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/dubaird-and-tech-hubwomenintech.jpeg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">
              A global leader in research and digital transformation
            </p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/global-hq-destination-dubai-technology-2-dtcm.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">
              World-leading tech connectivity for your HQ
            </p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/cityscape-difc-dtcm.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">
              Free trade with a laser focus on the future
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="px-4 max-w-4xl mx-auto text-4xl font-benton font-bold m-4">
          Dubai Economic Agenda 'D33'
        </h2>
        <img
          src="/assets/museum-of-the-future-dubai.jpg" // Replace with your image URL
          alt="Invest in Dubai"
          className="w-full h-screen object-cover"
        />
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <p className="text-sm font-benton font-medium max-w-xl my-4">
          The Dubai Economic Agenda 'D33' seeks to firmly establish Dubai as one
          of the top 3 cities to invest, live and work in.
        </p>
        <div className="mt-12">
          <h2 className="text-4xl font-benton my-8">
            D33 - Dubai City Ambitions
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#005F66] rounded-xl p-4">
                <div className="flex items-center">
                  <Image
                    src={"/assets/globe-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-4xl text-white font-benton font-bold ">
                    Dubai
                  </h3>
                </div>
                <p className="m-4 text-white">
                  The fastest, safest and most connected city in the world.
                </p>
              </div>
              <div className="bg-[#005F66] rounded-xl p-4">
                <div className="flex items-center">
                  <Image
                    src={"/assets/finance-money-fdi-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-4xl text-white font-benton font-bold ">
                    Investment
                  </h3>
                </div>
                <p className="m-4 text-white">
                  Conducive business environment for domestic and foreign direct
                  investment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#005F66] rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/finance-money-marketing-assets-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-4xl text-white font-benton font-bold ">
                    Economic Hub
                  </h3>
                </div>
              </div>
              <div className="bg-[#005F66] rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/business-destination-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-4xl text-white font-benton font-bold ">
                    Global leader
                  </h3>
                </div>
              </div>
              <div className="bg-[#005F66]  rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/public-relations-conversation-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-4xl text-white font-benton font-bold ">
                    Talent Hub
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#005F66] my-16 rounded-tr-[100px] rounded-bl-[100px] p-20">
          <p className="text-white text-lg">
            "2033 will mark 200 years since the foundation of Dubai: the year in
            which Dubai will be the most important global business centre, and
            by then we would have completed the Dubai Economic Agenda 2033. "
          </p>
          <div className="flex gap-4 mt-8">
            <img
              src="/assets/sheikh-mohammed-bin-rashid-al-maktoum.webp"
              className="w-10 h-10 rounded-full"
              alt="highness"
            />
            <div>
              <span className="text-white font-bold font-benton">
                His Highness Sheikh Mohammed bin Rashid Al Maktoum
              </span>
              <p className="text-white">
                Vice President and Prime Minister of the UAE and Ruler of Dubai
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-benton font-medium my-8">
          Construction and real estate
        </h2>
        <div className="flex gap-4 flex-col font-benton p-4 bg-gray-100 rounded-xl">
          <h3 className="text-2xl font-normal">
            Market-leading property sector
          </h3>
          <p className="text-sm ">
            Dubai is one of the most sought-after property markets in the world.
            Its dynamic real estate landscape boasts world-class infrastructure,
            backed by a visionary approach to urban planning. The immense
            investment potential offered by the city's property sector is only
            underscored by the recent surge in property transactions and plot
            sales.
            <br />
            <br /> In 2023, the city set a new record with the highest-ever
            number of real estate transactions. The total value of property
            deals hit US$172.6 billion (AED634 billion) from 166,400
            transactions, an annual growth of 20%. New investments grew by 55%,
            with more than 42% stemming from non-resident foreign investors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-4">
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/dubai-cityscape-burj-khalifa.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">Growth in the Economy</p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/iid-regulations-header-v2.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">Regulated real estate market</p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/hotels-close-to-dubai-airport-header-shutterstock-jun-2023.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">Tax-free investments</p>
          </div>
          <div className="rounded-md overflow-hidden">
            <img
              src="/assets/rid-stay-connected.jpg"
              alt="innovation-technology-business-in-dubai"
            />
            <p className="p-4 font-medium">Long-term residency</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col font-benton p-4 bg-[#ecf6fa] rounded-xl mt-16">
          <h3 className="text-2xl font-normal">Growing economic momentum</h3>
          <p className="text-sm ">
            The UAE is currently the region's second-largest construction
            projects market, with over US$356 billion (AED1.3 trillion) in
            private real estate developments, ongoing public housing and
            building projects. The sector is set for continued growth,
            anticipated to reach US$50.40 billion (AED185.12 billion) by 2029.{" "}
            <br />
            <br />
            This growth is a testament to Dubai's rise as the 'city of the
            future', a pivotal gateway to the world's fastest-growing markets
            and a premier destination for investment and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 text-white">
          <div className="bg-[#005F66] p-4 rounded-xl">
            <h3 className="text-3xl mb-4">60% of Dubai's land area</h3>
            <p>will comprise nature reserves & rural areas by year 2040.</p>
          </div>
          <div className="bg-[#005F66] p-4 rounded-xl">
            <h3 className="text-3xl mb-4">+16% year-on-year price rise</h3>
            <p>in Dubai's property market, second fastest worldwide.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
