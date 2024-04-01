"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { createEnquiry } from "@/app/actions";
import { useEffect, useRef } from "react";
const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="button w-fit px-7 py-3 !border-[#888888] border"
      disabled={pending}
    >
      {pending ? "Sending Enquiry" : "  Submit enquiry"}
    </button>
  );
}

export function AddForm({ id }) {
  const [state, formAction] = useFormState(createEnquiry, initialState);
  const { toast } = useToast();
  const formRef = useRef(null);
  useEffect(() => {
    if (state.message) {
      toast({
        title: "Enquiry About [product name]",
        description:
          "Thank you for your interest in [Product Name]! Your enquiry has been successfully submitted. We'll get back to you shortly.",
      });
      state.message = false;
      formRef.current.reset();
    }
  }, [state.message]);
  return (
    <form
      action={formAction}
      className="w-full max-w-[461px] text-[#2A2A2A]"
      ref={formRef}
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
        name="email"
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
        <SubmitButton />
      </div>
    </form>
  );
}
