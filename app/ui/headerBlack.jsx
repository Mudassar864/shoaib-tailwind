"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ActaDisplay } from "../fonts";
import Image from "next/image";
import Sothebys from "../icons/Sothebys";

export default function HeaderBlack() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header-black">
      <div className="w-full flex items-center justify-between pt-4 py-2">
        <div className="flex flex-col">
          <Link
            href="/"
            className={`text-xl lg:text-2xl ${ActaDisplay.className}`}
          >
            Shoaib <span className="font-semibold ">Shahid.</span>
          </Link>
          <span className="text-sm flex items-center">
            Associate director at <strong className="ml-1">Dubai Sotheby's </strong>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-4">
            <Link href="https://wa.me/+971527180606">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="mailto:mss@sothebysrealty.ae">
              <MdOutlineMailOutline size={20} />
            </Link>
            <Link href="tel:+971527180606">
              <LuPhone size={20} />
            </Link>
          </div>
          <button className="btn md:hidden" onClick={() => setMenu(true)}>
            menu
          </button>
        </div>
      </div>
      <nav className="border-t py-4 hidden md:block">
        <div className="max-w-max mx-auto flex gap-8 items-center">
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/off-plan-projects"
          >
            projects
          </Link>
          <Link href="/services" className="uppercase">
            services
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            Achievements
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/contact"
          >
            contact
          </Link>
        </div>
      </nav>
      <nav
        className={`absolute top-0 left-0 w-full h-screen z-20 bg-white text-black ${
          menu ? "block" : "hidden"
        }`}
      >
        <button
          className="btn-border absolute right-4 top-4"
          onClick={() => setMenu(false)}
        >
          close
        </button>
        <div className="flex items-center justify-center flex-col gap-16 w-full h-full">
          <Link href="/" className="uppercase">
            Home
          </Link>

          <Link href="/off-plan-projects" className="uppercase">
            projects
          </Link>
          <Link href="/services" className="uppercase">
            services
          </Link>
          <Link href="/" className="uppercase">
            Achievements
          </Link>
          <Link href="/about" className="uppercase">
            About
          </Link>
          <Link href="/contact" className="uppercase">
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
