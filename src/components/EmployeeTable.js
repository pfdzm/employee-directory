import React from "react";
import EmployeeRow from "./EmployeeRow";
import TableSearch from "./TableSearch";
import HeaderRow from "./HeaderRow";
import FooterRow from "./FooterRow";

export default function EmployeeTable({
  inputHandler,
  searchTerm,
  data,
  results,
  currentIndex,
  resultsPerPage,
  handlePrevPage,
  handleNextPage,
  sortData,
  sortBy
}) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <TableSearch inputHandler={inputHandler} searchTerm={searchTerm} />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <HeaderRow sortBy={sortBy} sortData={sortData} />
              </thead>
              <tbody>
                {data.map((employee, index) => (
                  <EmployeeRow key={index} {...employee} />
                ))}
              </tbody>
            </table>
            <FooterRow
              results={results}
              currentIndex={currentIndex}
              resultsPerPage={resultsPerPage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
