import * as React from "react";

export const EmailTemplateC = ({ fullName, email, phone, message }) => (
  <div>
    <h1>Contact Us</h1>
    <p>Full Name: {fullName}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Message: {message}</p>
  </div>
);
