"use client";
import React, { useState } from "react";

export default function List({ title, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <li
      className="bg-[#ecf6fa] font-benton p-4 rounded-xl cursor-pointer text-black"
      onClick={() => setVisible(!visible)}
    >
      <b>{title}</b>
      {visible && <p className="my-4">{text}</p>}
    </li>
  );
}
