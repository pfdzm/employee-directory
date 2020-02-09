import React from "react";

export default function HeaderRow({ sortBy, sortData }) {
  let className =
    "cursor-pointer px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs uppercase tracking-wider ";
  return (
    <tr>
      <th
        className={
          sortBy === "Name"
            ? className + "font-bold text-gray-700"
            : className + "font-semibold text-gray-600"
        }
        onClick={sortData}
      >
        Name
      </th>
      <th
        className={
          sortBy === "Country"
            ? className + "font-bold text-gray-700"
            : className + "font-semibold text-gray-600"
        }
        onClick={sortData}
      >
        Country
      </th>
      <th
        className={
          sortBy === "Created date"
            ? className + "font-bold text-gray-700"
            : className + "font-semibold text-gray-600"
        }
        onClick={sortData}
      >
        Created date
      </th>
      <th
        className={
          sortBy === "Email"
            ? className + "font-bold text-gray-700"
            : className + "font-semibold text-gray-600"
        }
        onClick={sortData}
      >
        Email
      </th>
    </tr>
  );
}
