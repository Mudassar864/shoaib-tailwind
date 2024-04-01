// formData.js

export default {
  name: "formData",
  title: "Form Data",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Full name of the person making the enquiry",
    },
    {
      name: "email",
      title: "Email",
      type: "email",
      description: "Email address of the person making the enquiry",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Phone number of the person making the enquiry",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      description: "Message or enquiry details",
    },
    {
      name: "offPlanProject",
      title: "Off-Plan Project",
      type: "reference",
      to: [{ type: "offPlanProject" }],
      description: "Reference to the off-plan project related to this enquiry",
    },
  ],
};
