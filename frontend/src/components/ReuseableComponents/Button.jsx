import React from "react";

export default function Button({
  icon,
  children,
  className,
  onClick,
  text,
  ...rest
}) {

  return (
    <button onClick={() => onClick()} className={`${className} `} {...rest}>
      <span className="text-center text-white">{text || icon || children}</span>
    </button>
  );
}
