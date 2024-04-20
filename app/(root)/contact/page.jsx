import Footer from "@/app/ui/footer";
import HeaderBlack from "@/app/ui/headerBlack";
import { AddForm } from "@/components/AddForm";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderBlack />
      <div className="flex  flex-col-reverse lg:flex-row pt-20 md:pt-36">
        <div className="basis-full   lg:basis-[65%] px-4 md:px-20 py-10">
          <div className="flex flex-col gap-6">
            <span className="text-3xl md:text-6xl capitalize text-sothebys-blue">
              Contact
            </span>
            <h1 className=" text-3xl md:text-6xl  ">
              Shoaib{" "}
              <span className="font-semibold text-sothebys-blue ">
                Shahid.
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 mt-8 md:mt-24">
            <p>
              Please complete the form below, and your message will be promptly
              delivered to the appropriate personnel who will respond within the
              next 5 to 10 minutes.
            </p>
            <p>
              If you require immediate assistance, please don't hesitate to{" "}
              <b>call or whatsapp</b> us on{" "}
              <span className="inline-block">
                <Link href="tel:+971527180606">
                  <strong className="text-sothebys-blue">
                    +971 52 7180606
                  </strong>
                </Link>
              </span>
              .
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="basis-full lg:basis-[35%] relative overflow-hidden">
          <Image
            className="w-full object-cover "
            src="/assets/about-sec3.jpg"
            width={900}
            height={1200}
            alt="image"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
