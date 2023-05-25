import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, itemsCount, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((p) => (
          <li
            className={"page-item" + (p === currentPage ? " active" : "")}
            key={"page_" + p}
          >
            <button className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
