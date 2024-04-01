"use server";
import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";

export const createEnquiry = async (prevState, formData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const id = formData.get("id");

  // Validate form fields
  if (!fullName || !email || !phone || !message || !id) {
    return { message: false };
  }

  const rawFormData = {
    _type: "formData",
    fullName,
    email,
    phone,
    message,
    offPlanProject: {
      _ref: id,
    },
  };

  try {
    const response = await client.create(rawFormData);
    return { message: true };
  } catch (error) {
    return { message: false };
  }
};
