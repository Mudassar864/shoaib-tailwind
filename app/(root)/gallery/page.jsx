import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import React from "react";
export const metadata = {
  title: "Property Gallery | Shoaib Shahid Real Estate Portfolio",
  description:
    "Explore a curated gallery of luxury properties, off-plan developments, and real estate projects presented by Shoaib Shahid across Dubai and international markets.",

  keywords: [
    "real estate gallery",
    "property portfolio",
    "Shoaib Shahid properties",
    "Dubai property photos",
    "luxury real estate gallery",
    "off-plan property visuals",
    "investment property images",
    "property showcase",
    "villa gallery Dubai",
    "real estate project images"
  ],

  alternates: {
    canonical: "https://www.theshoaibshahid.com/gallery",
  },

  openGraph: {
    title: "Property Gallery | Shoaib Shahid Real Estate Portfolio",
    description:
      "Browse stunning visuals of premium villas, off-plan projects, and luxury developments guided by Shoaib Shahid.",
    url: "https://www.theshoaibshahid.com/gallery",
    type: "website",
    images: [
      {
        url: "https://www.theshoaibshahid.com/assets/gallery-cover.jpg", // Update with actual image
        width: 1200,
        height: 630,
        alt: "Luxury Property Gallery - Shoaib Shahid",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | Shoaib Shahid's Luxury Property Portfolio",
    description:
      "Explore high-end real estate through our gallery of international and Dubai-based properties curated by Shoaib Shahid.",
    images: ["https://www.theshoaibshahid.com/assets/gallery-cover.jpg"],
  },
};

export default function page() {
  const images = [
    { url: "/assets/about/3.jpg", wide: true },
    { url: "/assets/about/5.jpg", wide: true },
    { url: "/assets/about/6.jpg", wide: true },
    { url: "/assets/about/7.jpeg", wide: true },
    { url: "/assets/about/8.jpeg", wide: false },
    { url: "/assets/about/23.jpeg", wide: false },
    { url: "/assets/about/9.jpeg", wide: true },
    { url: "/assets/about/10.jpeg", wide: false },
    { url: "/assets/about/11.jpg", wide: false },
    { url: "/assets/about/12.jpg", wide: true },
    { url: "/assets/about/13.jpg", wide: true },
    { url: "/assets/about/14.jpg", wide: false },
    { url: "/assets/about/16.jpg", wide: false },
    { url: "/assets/about/15.jpg", wide: true },
    { url: "/assets/about/16.jpg", wide: false },
    { url: "/assets/about/17.jpeg", wide: false },
    { url: "/assets/about/18.jpeg", wide: false },
    { url: "/assets/about/26.jpeg", wide: false },
    { url: "/assets/about/20.jpeg", wide: true },
    { url: "/assets/about/19.jpeg", wide: true },
    { url: "/assets/about/22.jpeg", wide: true },
    { url: "/assets/about/21.jpeg", wide: false },
    { url: "/assets/about/25.jpeg", wide: false },
    { url: "/assets/about/27.jpeg", wide: true },
    // Add more image objects as needed
  ];
  return (
    <>
      <HeaderBlack />
      <div className="max-w-6xl mx-auto my-12 pt-12 md:pt-20">
        <h1 className="text-4xl text-center my-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2">
        <div  className={`col-span-1 sm:col-span-2 md:col-span-4`}>
            <img
              src="/assets/about/1.jpg"
              className="w-full h-full object-cover rounded-md"
              alt={`Image`}
            />
          </div>

          {images.map((image, index) => (
            <div
              key={index}
              className={`col-span-1 ${
                image.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <img
                src={image.url}
                className="w-full h-full object-cover rounded-md"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
           <div  className={`col-span-1 sm:col-span-2 md:col-span-4`}>
            <img
              src="/assets/about/28.jpeg"
              className="w-full h-full object-cover rounded-md"
              alt={`Image`}
            />
          </div>

          <div  className={`col-span-1 sm:col-span-2 md:col-span-4`}>
            <img
              src="/assets/about/2.jpg"
              className="w-full h-full object-cover rounded-md"
              alt={`Image`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
