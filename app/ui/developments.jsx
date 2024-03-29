import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/public//assets/project1.jpg";
import project2 from "@/public//assets/project2.jpg";
import project3 from "@/public//assets/project3.jpg";
export default function Developments() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="md:px-16 mx-auto">
        <div className="px-5 text-center md:max-w-2xl mx-auto">
          <h2 className="text-xl md:text-3xl mb-4 uppercase">
            New Developments
          </h2>
          <span className="text-sm">
            Discover meticulously crafted homes exuding luxury and
            sophistication. Explore urban residences and countryside retreats
            redefining modern living.
          </span>
        </div>
        <div className="grid grid-cols-1 pt-7 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col">
            <div className="w-full h-[300px] overflow-hidden relative">
              <Image
                src={project1}
                className="object-cover"
                fill={true}
                alt="project one"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col flex-grow flex-shrink pt-4 gap-3 justify-between ">
              <h3 className="text-base">
                <span className="font-semibold">Discover Palm Jabal Ali:</span>{" "}
                The Ultimate Destination for High-Profile Luxury
              </h3>
              <p className="text-sm mb-2">
                Palm Jabal Ali has emerged as the latest and most opulent
                destination for high-profile individuals like yourself. This
                exclusive development represents an upgraded version of the
                renowned Palm Jumeirah, boasting a host of cutting-edge features
                and amenities
              </p>
              <Link className="btn-underline" href="#">
                Explore
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[300px] overflow-hidden relative">
              <Image
                src={project2}
                className="object-cover"
                fill={true}
                alt="project two"
                placeholder="blur"
                priority
              />
            </div>
            <div className="flex flex-col flex-grow flex-shrink pt-4 gap-3 justify-between ">
              <h3 className="text-base">
                <span className="font-semibold">
                  Atlantis, The Royal Residences:
                </span>{" "}
                Where Luxury Meets Iconic Architecture in Dubai
              </h3>
              <p className="text-sm mb-2">
                Atlantis, The Royal, a pinnacle of luxury in Dubai, crafted by
                renowned teams like Kohn Pedersen Fox Associates, Sybille de
                Margerie, and WET Design. Six towers linked by a 90-meter sky
                bridge merge classic and modern styles. Kerzner International's
                Atlantis The Royal Residences redefine opulence with iconic
                architecture and lavish amenities.
              </p>
              <Link className="btn-underline" href="#">
                Explore
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[300px] overflow-hidden relative">
              <Image
                src={project3}
                className="object-cover"
                fill={true}
                placeholder="blur"
                priority
                alt="project three"
              />
            </div>
            <div className="flex flex-col flex-grow flex-shrink pt-4 gap-3 justify-between ">
              <h3 className="text-base">
                <span className="font-semibold">Baccarat Residences:</span>{" "}
                Exquisite Luxury Living in Downtown Dubai
              </h3>
              <p className="text-sm mb-2">
                Baccarat Residences in Downtown Dubai present exclusive luxury
                living near Dubai Mall and Burj Khalifa. Featuring 42 private
                residences influenced by the brand's crystal artistry, designed
                by Studio Libeskind and 1508 London. Offering three to
                four-bedroom apartments and penthouses with breathtaking city
                vistas.
              </p>
              <Link className="btn-underline" href="#">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
