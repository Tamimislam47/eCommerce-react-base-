import React, { useState } from "react";
import PaginationFuc from "./PaginationFuc";

export default function Pagination({ setCurrentPage, postsPerPage, length }) {
  const currentPageHanlder = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className="join">
      <PaginationFuc
        setcurrentBtn={currentPageHanlder}
        postsPerPage={postsPerPage}
        length={length}
      />
    </div>
  );
}
