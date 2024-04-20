"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { sendEmailContact } from "@/actions/sendEmailContact";

export default function ContactForm() {
  const { toast } = useToast();

  return (
    <form
    className="mt-4"
      action={async (formData) => {
        const { data, error } = await sendEmailContact(formData);
            
        if (error) {
          toast({
            title: "Error",
            description: error,
          });
          return;
        }

        toast({
          title: "Contact Us",
          description:
            "Thank you for your interest! Your enquiry has been successfully submitted. We'll get back to you shortly.",
        });
      }}
    >
      <div className="w-full flex flex-col pt-8 gap-3">
        <div className="flex gap-2 flex-col md:flex-row">
          <input
            type="text"
            className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
            placeholder="First Name"
            name="firstName"
          />
          <input
            type="text"
            className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
            placeholder="Last Name"
            name="lastName"
          />
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <input
            type="tel"
            className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
            placeholder="Phone"
            name="phone"
          />
          <input
            type="text"
            className="basis-full md:basis-1/2 border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <textarea
            name="message"
            placeholder="Your Message"
            className="basis-full border placeholder-black py-2 px-6 font-benton text-base hover:outline-none focus:outline-none"
          ></textarea>
        </div>
        <input
          type="submit"
          className="py-3 px-12 uppercase cursor-pointer max-w-max font-benton text-bkack border  transition-all duration-300 hover:bg-sothebys-blue hover:border-sothebys-blue hover:text-white"
          value="submit"
        />
      </div>
    </form>
  );
}
