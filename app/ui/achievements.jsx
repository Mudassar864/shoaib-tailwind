import React from "react";

export default function Achievements() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="flex flex-col items-center text-center gap-4 mb-4">
        <h2 className="text-center text-lg font-semibold">ACHIEVEMENTS</h2>
        <span className="text-center">
          Muhammad Shoaib Shahid's Remarkable Achievements
        </span>
      </div>
      <div className="flex flex-col  gap-8 max-w-max  mx-auto md:flex-row md:gap-16 md:mt-8">
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl">
          <span className="font-bold">15+</span>
          <span>Experience</span>
        </div>
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl">
          <span className="font-bold">1.5B+</span>
          <span>Sales</span>
        </div>
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl">
          <span className="font-bold">30+</span>

          <span>Projects</span>
        </div>
      </div>
    </section>
  );
}
