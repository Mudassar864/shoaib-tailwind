import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-[#262626] text-white py-8">
      <div className="mx-auto max-w-max flex flex-col items-center gap-4">
        <h2 className="text-lg text-center">
          STAY CONNECTED
          <br /> SIGN UP TO OUR NEWSLETTER
        </h2>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 outline-none"
          placeholder="Your Email Address"
        ></input>
        <Link className="btn-border-white" href="#">
          Sign Up
        </Link>
      </div>
    </section>
  );
}
