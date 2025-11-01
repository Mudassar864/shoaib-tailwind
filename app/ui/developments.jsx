import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/public/assets/982683c6-23d2-4d52-a272-980a1126e2ec.webp";
import project2 from "@/public/assets/project2.jpg";
import project3 from "@/public/assets/img74.jpg";

/**
 * Development card data structure
 */
const developments = [
  {
    id: "palm-jabal-ali",
    image: project1,
    title: "Discover Palm Jabal Ali:",
    subtitle: "The Ultimate Destination for High-Profile Luxury",
    description:
      "Palm Jabal Ali has emerged as the latest and most opulent destination for high-profile individuals like yourself. This exclusive development represents an upgraded version of the renowned Palm Jumeirah, boasting a host of cutting-edge features and amenities.",
    href: "/off-plan-projects/palm-jebel-ali",
    priority: true,
  },
  {
    id: "atlantis-royal",
    image: project2,
    title: "Atlantis, The Royal Residences:",
    subtitle: "Where Luxury Meets Iconic Architecture in Dubai",
    description:
      "Atlantis, The Royal, a pinnacle of luxury in Dubai, crafted by renowned teams like Kohn Pedersen Fox Associates, Sybille de Margerie, and WET Design. Six towers linked by a 90-meter sky bridge merge classic and modern styles. Kerzner International's Atlantis The Royal Residences redefine opulence with iconic architecture and lavish amenities.",
    href: "/off-plan-projects",
    priority: true,
  },
  {
    id: "four-seasons",
    image: project3,
    title: "Four Season:",
    subtitle: "Where Luxury Meets Legendary Hospitality.",
    description:
      "Four Seasons is a globally renowned luxury hospitality brand, known for its exceptional service, elegant properties, and personalized experiences. Combining timeless sophistication with innovative design, Four Seasons creates unforgettable stays in iconic destinations, setting the gold standard for modern luxury travel.",
    href: "/off-plan-projects/four-seasons-private-residences-red-sea-global",
    priority: true,
  },
];

/**
 * Development Card Component
 */
const DevelopmentCard = ({ development }) => {
  const { id, image, title, subtitle, description, href, priority } = development;

  return (
    <article className="flex flex-col group">
      {/* Image Container */}
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src={image}
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          fill
          alt={`${title} ${subtitle}`}
          placeholder="blur"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow pt-4 gap-3">
        <h3 className="text-base font-normal text-black">
          <span className="font-semibold text-black">{title}</span>{" "}
          {subtitle}
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        <Link
          className="btn-underline mt-auto"
          href={href}
          aria-label={`Explore ${title} ${subtitle}`}
        >
          Explore
        </Link>
      </div>
    </article>
  );
};


export default function Developments() {
  return (
    <section className="py-12 px-4 bg-white" aria-labelledby="developments-heading">
      <div className="mx-auto md:px-16">
        {/* Section Header */}
        <header className="px-5 text-center md:max-w-2xl mx-auto mb-8">
          <h2 
            id="developments-heading"
            className="text-xl md:text-4xl mb-4 text-black font-bold"
          >
            New Developments
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Discover meticulously crafted homes exuding luxury and
            sophistication. Explore urban residences and countryside retreats
            redefining modern living.
          </p>
        </header>

        {/* Developments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developments.map((development) => (
            <DevelopmentCard key={development.id} development={development} />
          ))}
        </div>
      </div>
    </section>
  );
}