import React from "react";

export default function Button({ children, className, ...rest }) {
  return (
    <button className={`${className} bg-blue  text-center text-white`} {...rest}>
      {children}
    </button>
  );
}
