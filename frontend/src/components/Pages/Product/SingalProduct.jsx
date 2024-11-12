import React from "react";
import { useParams } from "react-router-dom";

export default function SingalProduct() {
  const id = useParams();

  console.log(id);

  return <div>SingalProduct</div>;
}
