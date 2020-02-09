import React from "react";

export default function Button({ handleClick, children, className }) {
  return (
    <button
      className={
        "text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 " +
        className
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
