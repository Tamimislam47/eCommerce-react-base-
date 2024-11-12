import React from "react";

export default function Input({ upperText, ...props }) {
  return (
    <div >
      <label >
        <span >{upperText}</span>
      </label>
      <input {...props} required />
    </div>
  );
}
