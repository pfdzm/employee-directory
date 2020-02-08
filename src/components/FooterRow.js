import React from "react";
import Button from "./Button";

export default function FooterRow({
  currentIndex,
  resultsPerPage,
  results,
  handlePrevPage,
  handleNextPage
}) {
  return (
    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
      <span className="text-xs xs:text-sm text-gray-900">
        Showing {currentIndex + 1} to {currentIndex + resultsPerPage} of{" "}
        {results}
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <Button handleClick={handlePrevPage}>Prev</Button>
        <Button handleClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
}
