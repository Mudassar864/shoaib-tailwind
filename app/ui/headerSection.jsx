"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ActaDisplay } from "../fonts";

export default function HeaderSection() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <div className="w-full flex items-center justify-between pt-4 py-2">
        <Link
          href="/"
          className={`text-xl lg:text-2xl ${ActaDisplay.className}`}
        >
          Shoaib <span className="font-semibold">Shahid.</span>
        </Link>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-4">
            <Link href="https://wa.me/+971527180606">
              <FaWhatsapp />
            </Link>
            <Link href="mailto:ss@theshoaibshahid.com">
              <MdOutlineMailOutline />
            </Link>
            <Link href="tel:+971527180606">
              <LuPhone />
            </Link>
          </div>
          <button className="btn md:hidden" onClick={() => setMenu(true)}>
            menu
          </button>
          <button className="btn hidden md:block md:px-8 md:py-4">
            contact now
          </button>
        </div>
      </div>
      <nav className="border-t py-4 hidden md:block">
        <div className="max-w-max mx-auto flex gap-8">
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/development"
          >
            Developments
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            Services
          </Link>
          <Link
            className="text-sm uppercase hover:text-gray-400 transition-all"
            href="/"
          >
            Achievements
          </Link>
        </div>
      </nav>
      <nav
        className={`absolute top-0 left-0 w-full h-screen bg-white text-black ${
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
          <Link href="/">Home</Link>
          <Link href="/">Developments</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Achievements</Link>
        </div>
      </nav>
    </header>
  );
}
