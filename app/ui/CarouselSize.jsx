import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export function CarouselSize({images}) {

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="flex flex-col"
    >
      <CarouselContent>
        {images.map((image, index) => (
          
          <CarouselItem key={index} className="basis-full pt-[40%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={urlForImage(image)}
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex p-4 items-center justify-between">
        <CarouselPrevious variant="none"  />
        {/* <span>{index}</span> */}
        <CarouselNext variant="none" />
      </div>
    </Carousel>
  );
}
