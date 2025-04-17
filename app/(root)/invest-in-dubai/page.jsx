import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import HeaderSection from "@/app/ui/headerSection";
import List from "@/app/ui/list";
import Image from "next/image";
import React from "react";
export const metadata = {
  title: "Invest in Dubai | Real Estate Opportunities with Shoaib Shahid",
  description:
    "Discover why Dubai is a top global destination for real estate investment. Shoaib Shahid guides you through off-plan opportunities, ROI potential, and luxury property deals in the UAE.",

  keywords: [
    "invest in Dubai",
    "Dubai real estate investment",
    "property investment UAE",
    "off-plan projects Dubai",
    "Dubai ROI properties",
    "Shoaib Shahid real estate",
    "luxury investment Dubai",
    "Dubai property market",
    "buy property in Dubai",
    "global real estate opportunities"
  ],

  alternates: {
    canonical: "https://www.theshoaibshahid.com/invest-in-dubai",
  },

  openGraph: {
    title: "Invest in Dubai | Property Market Insights by Shoaib Shahid",
    description:
      "Learn how to invest in Dubai real estate with confidence. Backed by 15+ years of experience, Shoaib Shahid offers insights into high-performing properties and market trends.",
    url: "https://www.theshoaibshahid.com/invest-in-dubai",
    type: "article",
    images: [
      {
        url: "https://www.theshoaibshahid.com/assets/invest-dubai-cover.jpg", // Update with actual image path
        width: 1200,
        height: 630,
        alt: "Invest in Dubai - Shoaib Shahid",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Invest in Dubai | Real Estate by Shoaib Shahid",
    description:
      "Explore top real estate investment opportunities in Dubai. Expert guidance from Shoaib Shahid with a proven record in global property sales.",
    images: ["https://www.theshoaibshahid.com/assets/invest-dubai-cover.jpg"],
  },
};

const page = () => {
  return (
    <>
      <HeaderSection />
      <div>
        <div className="relative">
          <img
            src="/assets/museum-of-the-future-dubai.jpg" // Replace with your image URL
            alt="Invest in Dubai"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start">
            <h1 className="text-white text-2xl md:text-6xl font-bold ml-4 md:ml-20">
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
          <p className="text-sm md:text-sm font-benton text-gray-700  max-w-2xl">
            Dubai delivers efficiency, access to growth markets, security and a
            forward-looking ecosystem for accelerated growth. Dubai brings
            people, process and technology seamlessly together to create an
            agile foundation for every industry.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-benton font-normal">Why Dubai</h2>
        <div className="grid grid-cols-1 gap-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="bg-sothebys-blue rounded-xl p-4">
              <div className="flex items-center">
                <Image
                  src={"/assets/finance-money-fdi-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                  Global Financial Hub
                </h3>
              </div>
              <p className="m-4 text-white">
                Dubai's position at the centre of the world means professionals
                can manage markets in the far east and the Americas all within
                the same day - your new "power 8 till 8" time zone.
              </p>
            </div>
            <div className="bg-sothebys-blue rounded-xl p-4">
              <div className="flex items-center gap-4 ">
                <Image
                  src={"/assets/money-bag-1-dirham-white-small-size.webp"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                  A magnet for businesses and investors
                </h3>
              </div>
              <p className="m-4 text-white">
                The world's leading companies, family offices, investment funds
                and entrepreneurs already call Dubai home.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-sothebys-blue rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/blockchain-business-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-2xl md:text-4xl text-white font-benton font-bold text-center">
                  Connecting the world
                </h3>
              </div>
            </div>
            <div className="bg-sothebys-blue rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/eligibility-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-2xl md:text-4xl text-white font-benton font-bold text-center">
                  Global hub for talent
                </h3>
              </div>
            </div>
            <div className="bg-sothebys-blue  rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Image
                  src={"/assets/technology-and-ict-2-white.svg"}
                  width={200}
                  height={100}
                  className="w-[200px] h-[100px]"
                  alt="home"
                />
                <h3 className="text-2xl md:text-4xl text-white font-benton font-bold text-center">
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
        <span className="text-sm md:text-sm font-benton text-gray-700 max-w-2xl">
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
          src="/assets/burj.jpg" // Replace with your image URL
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
          <h2 className="text-4xl font-bold font-octa my-8">
            D33 - Dubai City Ambitions
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-sothebys-blue rounded-xl p-4">
                <div className="flex items-center">
                  <Image
                    src={"/assets/globe-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                    Dubai
                  </h3>
                </div>
                <p className="m-4 text-white">
                  The fastest, safest and most connected city in the world.
                </p>
              </div>
              <div className="bg-sothebys-blue rounded-xl p-4">
                <div className="flex items-center">
                  <Image
                    src={"/assets/finance-money-fdi-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
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
              <div className="bg-sothebys-blue rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/finance-money-marketing-assets-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                    Economic Hub
                  </h3>
                </div>
              </div>
              <div className="bg-sothebys-blue rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/business-destination-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                    Global leader
                  </h3>
                </div>
              </div>
              <div className="bg-sothebys-blue  rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/assets/public-relations-conversation-white.svg"}
                    width={200}
                    height={100}
                    alt="home"
                  />
                  <h3 className="text-2xl md:text-4xl text-white font-benton font-bold ">
                    Talent Hub
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sothebys-blue my-16 rounded-tr-[100px] rounded-bl-[100px] p-20">
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
        <h2 className="text-4xl font-octa font-medium">
          Multinational corporations
        </h2>
        <p className="my-4">
          Attracting the world's best international businesses and conglomerates
          to Dubai.
        </p>
        <div className="flex gap-4 flex-col font-benton p-4 bg-sothebys-blue text-white rounded-xl">
          <p className="text-sm ">
            As one of the world's most diversified economies, Dubai is the
            preferred location for multinational corporations (MNCs) and
            conglomerates seeking a strategic location for multi-continent
            operations and attracting the best talent. Emphasising productivity
            and innovation, the city is committed to helping businesses expand
            and grow in a competitive, innovation-centric environment.
            <br />
            <br /> Global corporate giants have leveraged Dubai's status as a
            key trade gateway, enabling the seamless flow of goods and services
            by bridging the east-west time zone gap. They have tapped into the
            city's diverse workforce, strong regulatory framework and highly
            integrated trade and transport network to scale their services to
            new markets and demographics from this central geographic node.
            <br />
            <br />
            The pro-business environment is supported by growth-focused
            government strategies and programmes, such as the D33 Agenda, Dubai
            Global and Operation 300bn. These seek to position the city as a
            leading hub for business, finance, logistics and technology, as well
            as new-economy sectors like fintech, blockchain, AI and Web3.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 text-white">
          <div className="bg-sothebys-blue p-4 rounded-xl">
            <h3 className="text-3xl mb-4 font-benton">90%</h3>
            <p>of top regional CEOs of global firms are based in the UAE</p>
          </div>
          <div className="bg-sothebys-blue p-4 rounded-xl">
            <h3 className="text-3xl mb-4 font-benton">In top 10</h3>
            <p>most competitive economies in the world in 2023</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col p-4 bg-sothebys-blue text-white rounded-xl mt-16">
          <h3 className="text-2xl font-normal font-octa">
            Benefits for global companies in Dubai
          </h3>
          <p className="text-sm font-benton">
            The agile and resilient business ecosystem offers numerous unique
            advantages to multinational corporations in Dubai, including
            specially designated lower tax options and the opportunity to list
            on the Dubai Financial Markets (DFM). Dubai is also a top venture
            capital and FDI destination, offering a range of corporate support
            mechanisms through a dynamic network of angels, accelerators and the
            region’s largest concentration of venture capitalists.
            <br />
            <br />
            More than 20 business-first free zones provide advantages tailored
            to specific industries, from 100% foreign ownership, business
            set-up, licensing and visa assistance, to regulatory and legal
            support, access to ports and logistics facilities, and flexibility
            in working models.
            <br />
            <br />
            These include Dubai Internet City, which caters to technology and
            ICT-related businesses; the Dubai Multi Commodities Centre (DMCC),
            focused on facilitating trade across a range of commodities; and
            Dubai International Financial Centre (DIFC), with its business-led
            ecosystem under a common law English framework that offers
            familiarity and stability to MNCs.
          </p>
        </div>
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-octa font-medium my-8">
          Construction and real estate
        </h2>
        <div className="flex gap-4 flex-col  p-4 bg-sothebys-blue text-white rounded-xl">
          <h3 className="text-2xl font-normal font-octa">
            Market-leading property sector
          </h3>
          <p className="text-sm font-benton">
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
        <div className="flex gap-4 flex-col  p-4 bg-sothebys-blue rounded-xl mt-16 text-white">
          <h3 className="text-2xl font-normal font-octa">
            Growing economic momentum
          </h3>
          <p className="text-sm font-benton">
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
          <div className="bg-sothebys-blue p-4 rounded-xl">
            <h3 className="text-3xl mb-4 font-octa">
              60% of Dubai's land area
            </h3>
            <p className="font-benton">
              will comprise nature reserves & rural areas by year 2040.
            </p>
          </div>
          <div className="bg-sothebys-blue p-4 rounded-xl">
            <h3 className="text-3xl mb-4 font-octa">
              +16% year-on-year price rise
            </h3>
            <p className="font-benton">
              in Dubai's property market, second fastest worldwide.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-octa font-medium my-8">
          Key Investment Sectors Under the D-33
        </h2>

        <ul className="grid grid-cols-1 gap-4 my-10 text-white">
          <List
            title="Real Estate Mega Projects"
            text="Dubai continues to lead with groundbreaking real estate developments.
          We are currently focusing on several mega projects that promise to
          redefine the cityscape, including The palm Jabal Ali , Dubai Creek
          Harbour, Dubai South, and Meydan One. These projects are designed to
          offer unmatched residential, commercial, and recreational spaces,
          providing excellent opportunities for substantial returns on
          investment."
          />
          <List
            title="Foreign Investment in Real Estate"
            text="Dubai offers a conducive environment for foreign investors, with incentives such as the Golden Visa program, relaxed foreign ownership laws, and the introduction of Real Estate Investment Trusts (REITs). These initiatives are aimed at attracting top global investors and ensuring a robust and profitable investment landscape."
          />
          <List
            title="Hospitality"
            text="As a global tourism hub, Dubai is expanding its hospitality sector with new luxury hotels, resorts, and the development of existing properties. The Dubai Tourism Strategy 2025 and the legacy of Expo 2020 continue to drive growth, offering lucrative opportunities in the hospitality industry."
          />
          <List
            title="Beachfront Resorts"
            text="Our beachfront developments are at the forefront of innovation and sustainability. Projects such as Jumeirah Beachfront and La Mer are designed to integrate eco-friendly practices and smart technologies, providing unique investment opportunities in one of the most sought-after segments of the market."
          />
          <List
            title="Education"
            text="Dubai is investing heavily in its educational infrastructure, with plans for new schools, universities, research centres and partnerships with leading global institutions. The government's commitment to educational reforms, funding, and scholarships presents a promising avenue for investment in the education sector."
          />
        </ul>
        <h2 className="text-2xl font-octa font-medium my-4">
          Sustainable and Green Initiatives
        </h2>
        <p className="text-normal font-benton my-4">
          Saving the planet for the future generation. Aligned with the D33
          agenda, our focus on sustainability is unwavering. We are implementing
          green building standards, renewable energy projects, and smart city
          technologies across all sectors. These initiatives not only contribute
          to a healthier environment but also ensure long-term economic
          viability and growth.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default page;
