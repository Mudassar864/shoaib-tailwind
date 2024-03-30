import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSize() {

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="flex flex-col"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full pt-[52%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src="/assets/slider-1.jpg"
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
