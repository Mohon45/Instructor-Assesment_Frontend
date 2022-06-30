import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ clickedPaged, pageCount, currentPage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="&raquo;"
      onPageChange={clickedPaged}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="&laquo;"
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
