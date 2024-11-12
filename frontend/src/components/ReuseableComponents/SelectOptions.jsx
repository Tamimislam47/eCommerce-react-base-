import React from "react";

export default function SelectOptions({ ...props }) {
  const { value, text } = props;
  return (
    <option value={value} {...props}>
      {props.children}
    </option>
  );
}
