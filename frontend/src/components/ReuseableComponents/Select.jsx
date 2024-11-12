import React from "react";
import Option from "./SelectOptions";
export default function Select({ ...props }) {
  return <select {...props}>{props.children}</select>;
}
