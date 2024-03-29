import React from "react";
export default function Banner() {
  return (
    <section className="w-full  relative bg-black">
      <video muted autoPlay loop playsInline className="w-full">
        <source src="/assets/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-14 left-10 hidden md:block max-w-96">
        <h2 className="text-xl text-white font-normal mb-4">
          <span className="font-semibold">Pioneering Prestige:</span> Where
          Luxury Meets Exceptional Service
        </h2>
        <button className="btn">Explore</button>
      </div>
    </section>
  );
}
