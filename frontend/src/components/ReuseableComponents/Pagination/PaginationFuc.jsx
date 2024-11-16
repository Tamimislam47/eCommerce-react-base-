import React, { useState } from "react";

const PaginationFuc = ({ postsPerPage, length, setcurrentBtn }) => {
  const [startPage, setStartPage] = useState(1);
  const windowSize = 2; 
  const totalPages = Math.ceil(length / postsPerPage);

  const paginationNumbers = [];
  for (let i = startPage; i < startPage + windowSize && i <= totalPages; i++) {
    paginationNumbers.push(i);
  }

  const handlePrevious = () => {
    if (startPage > 1) setStartPage(startPage - 1);
  };

  const handleNext = () => {
    if (startPage + windowSize - 1 < totalPages) setStartPage(startPage + 1);
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={startPage === 1}
        className="btn join-item"
      >
        {"<<"}
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setcurrentBtn(pageNumber)}
          className="btn join-item"
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={startPage + windowSize - 1 >= totalPages}
        className="btn join-item"
      >
        {">>"}
      </button>
    </div>
  );
};

export default PaginationFuc;
