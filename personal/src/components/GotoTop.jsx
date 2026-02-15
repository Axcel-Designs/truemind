import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GotoTop() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-blue-500 w-fit p-2 rounded-full bottom-10 fixed right-5 flex"
    >
      <FaArrowUp className="cursor-pointer text-white" />
    </div>
  );
}
