"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { createEnquiry } from "@/app/actions";
import { useEffect, useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function SubmitButton({ text }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="py-3 px-9 max-w-max font-benton text-bkack border transition-all duration-300 hover:bg-white hover:border-black "
      disabled={pending}
    >
      {text}
    </button>
  );
}

export function AddForm({ id, text }) {
  const [state, formAction] = useFormState(createEnquiry, initialState);
  const { toast } = useToast();
  const formRef = useRef(null);
  useEffect(() => {
    if (state.message) {
      toast({
        title: "Enquiry",
        description:
          "Thank you for your interest! Your enquiry has been successfully submitted. We'll get back to you shortly.",
      });
      state.message = false;
      formRef.current.reset();
    }
  }, [state.message]);
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast({
            title: "Error",
            description: error,
          });
          return;
        }
        toast({
          title: "Enquiry",
          description:
            "Thank you for your interest! Your enquiry has been successfully submitted. We'll get back to you shortly.",
        });
      }}
      className="w-full max-w-[461px] text-[#2A2A2A]"
      ref={formRef}
      id="contact"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="fullName"
        className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border "
        placeholder="Full name"
      />
      <input
        type="email"
        name="senderEmail"
        className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border"
        placeholder="E-mail address"
      />
      <input
        type="tel"
        name="phone"
        className="request-information-field w-full h-[58px] rounded mb-4 pl-3 border"
        placeholder="Phone"
      />
      <textarea
        name="message"
        className="request-information-field w-full h-[100px] rounded mb-8 md:mb-4 pl-3 pt-4 resize-none border"
        placeholder="How can we help?"
      />
      <div className="w-full flex items-center justify-center">
        <SubmitButton text={text} />
      </div>
    </form>
  );
}
