"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";

export function CarouselSize({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const updatedImages = [...images];
  const onOpen = (i,image) => {
    setIsOpen(true);
 
  };

  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
        className="flex flex-col aspect-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-4/6">
              <div className="w-full h-full">
                <Image
                  src={urlForImage(image)}
                  alt="image"
                  className="w-full h-auto object-cover aspect-video cursor-pointer"
                  width={1000}
                  height={1000}
                  onClick={() => onOpen(index,image)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex p-4 items-center justify-between">
          <CarouselPrevious variant="none" />
          <CarouselNext variant="none" />
        </div>
      </Carousel>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!max-w-7xl">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {updatedImages?.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <Image
                    src={urlForImage(image)}
                    alt="image"
                    className=" aspect-video mx-auto"
                    width={1000}
                    height={1000}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
