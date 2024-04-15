"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ActaDisplay } from "../fonts";
import Sothebys from "../icons/Sothebys";
import { cn } from "@/lib/utils";

export default function HeaderSection() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    scrollY > 80 ? setIsSticky(true) : setIsSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "header",
        { "fixed w-full top-0 left-0 bg-white z-30 shadow-md text-black": isSticky }
      )}
    >
      <div className="w-full flex items-center justify-between pt-4 py-2">
        <div className="flex flex-col">
          <Link
            href="/"
            className={`text-xl lg:text-2xl ${ActaDisplay.className}`}
          >
            Shoaib <span className="font-semibold">Shahid.</span>
          </Link>
          <span className="text-xs flex items-center  font-benton gap-1">
            <div>Associate Director at</div>{" "}
            <div className="svg mt-[2px]">
              <Sothebys width="100" isSticky={isSticky} />
            </div>
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
        <div className="max-w-max mx-auto flex gap-8 items-center font-benton">
          <Link
            className="text-sm capitalize hover:text-gray-400 transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm capitalize hover:text-gray-400 transition-all"
            href="/off-plan-projects"
          >
            projects
          </Link>
          <Link href="/services" className="capitalize">
            services
          </Link>

          {/* <Link
            className="text-sm capitalize hover:text-gray-400 transition-all"
            href="/"
          >
            Achievements
          </Link> */}
          <Link
            className="text-sm capitalize hover:text-gray-400 transition-all"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm capitalize hover:text-gray-400 transition-all"
            href="/contact"
          >
            contact
          </Link>
        </div>
      </nav>
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-white text-black ${
          menu ? "block" : "hidden"
        }`}
      >
        <button
          className="btn-border absolute right-4 top-4"
          onClick={() => setMenu(false)}
        >
          close
        </button>
        <div className="flex items-center justify-center flex-col  gap-16  w-full h-full ">
          <Link href="/" className="capitalize" onClick={() => setMenu(false)}>
            Home
          </Link>

          <Link
            href="/off-plan-projects"
            className="capitalize"
            onClick={() => setMenu(false)}
          >
            projects
          </Link>
          <Link
            href="/services"
            className="capitalize"
            onClick={() => setMenu(false)}
          >
            services
          </Link>
          {/* <Link href="/" className="capitalize" onClick={() => setMenu(false)}>
            Achievements
          </Link> */}
          <Link
            href="/about"
            className="capitalize"
            onClick={() => setMenu(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="capitalize"
            onClick={() => setMenu(false)}
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
