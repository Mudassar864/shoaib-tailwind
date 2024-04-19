"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { EmailTemplateC } from "@/components/email-templateC";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailContact = async (formData) => {
  const firstName = formData.get("firstName"); // Corrected "fullname" to "fullName"
  const lastName = formData.get("lastName"); // Corrected "fullname" to "fullName"
  const senderEmail = formData.get("email");
  const phone = formData.get("phone"); // Changed "number" to "phone"
  const message = formData.get("message");
  const fullName = firstName + lastName;
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
      from: `Contact Us from ${fullName} <onboarding@resend.dev>`,
      to: "mohsanbhatti864@gmail.com",
      subject: "Contact Us",
      react: (
        <EmailTemplateC
          fullName={fullName}
          email={senderEmail}
          phone={phone}
          message={message}
        />
      ), // Passing formData to EmailTemplate
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
