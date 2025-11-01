"use client";
import React, { useState } from "react";

export default function List({ title, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <li
      className="bg-[#f7f7f7]  p-4 rounded-xl cursor-pointer text-black"
      onClick={() => setVisible(!visible)}
    >
      <b className="font-octa">{title}</b>
      {visible && <p className="my-4 font-benton">{text}</p>}
    </li>
  );
}
