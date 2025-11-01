import React from "react";

export default function Achievements() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="flex flex-col items-center text-center gap-4 mb-4">
        <h2 className="text-center text-lg font-semibold md:text-4xl text-black">ACHIEVEMENTS</h2>
        <span className="text-center">
          Muhammad Shoaib Shahid's Remarkable Achievements
        </span>
      </div>
      <div className="flex flex-col  gap-8 max-w-max  mx-auto md:flex-row md:gap-16 md:mt-8 ">
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl border-[#f7f7f7] font-benton">
          <span className="font-bold text-4xl text-black">15+</span>
          <span>Experience</span>
        </div>
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl border-[#f7f7f7] font-benton">
          <span className="font-bold text-4xl text-black">1.5B+</span>
          <span>Sales</span>
        </div>
        <div className="flex flex-col gap-4 border-l-2 pl-3 text-xl border-[#f7f7f7] font-benton">
          <span className="font-bold text-4xl text-black">70+</span>

          <span>Serving HNWIs and Top Companies with Distinction</span>
        </div>
      </div>
    </section>
  );
}
