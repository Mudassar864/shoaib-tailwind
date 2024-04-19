"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const fullName = formData.get("fullName"); // Corrected "fullname" to "fullName"
  const senderEmail = formData.get("senderEmail");
  const phone = formData.get("phone"); // Changed "number" to "phone"
  const message = formData.get("message");
  const title = formData.get("id");

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    // Sending email using Resend API
    data = await resend.emails.send({
      from: `New inquiry from ${fullName} <onboarding@resend.dev>`,
      to: "mohsanbhatti864@gmail.com",
      subject: "New Enquiry",
      react: <EmailTemplate fullName={fullName} title={title} email={senderEmail} phone={phone} message={message} />, // Passing formData to EmailTemplate
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
