import * as React from "react";

export const EmailTemplate = ({ fullName,title, email, phone, message }) => (
  <div>
    <h1>New Enquiry for {title}</h1>
    <p>Full Name: {fullName}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Message: {message}</p>
  </div>
);
