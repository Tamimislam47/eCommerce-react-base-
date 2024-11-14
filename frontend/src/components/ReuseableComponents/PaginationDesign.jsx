import React, { useState } from "react";
import PaginationFuc from "./PaginationFuc";
export default function Pagination({ postsPerPage, length }) {
  const [currentBtn, setcurrentBtn] = useState(null);


  return (
    <div className="join">
      <PaginationFuc
        setcurrentBtn={setcurrentBtn}
        postsPerPage={postsPerPage}
        length={length}
      />
    </div>
  );
}
