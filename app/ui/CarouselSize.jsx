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

export function CarouselSize({ images }) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="flex flex-col aspect-auto"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-4/6 ">
            <div className="w-full h-full">
              <Image
                src={urlForImage(image)}
                alt="image"
                className="w-full h-full object-cover aspect-video"
                width={1000}
                height={1000}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex p-4 items-center justify-between">
        <CarouselPrevious variant="none" />
        {/* <span>{index}</span> */}
        <CarouselNext variant="none" />
      </div>
    </Carousel>
  );
}
