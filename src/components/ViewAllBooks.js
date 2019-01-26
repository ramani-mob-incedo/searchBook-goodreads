import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

const ViewAllBooks = ({ books, expandBook }) => {
  return (
    <div className="row">
      {books.map(book => (
        <SearchResult bookData={book} key={book.id} expandBook={expandBook} />
      ))}
    </div>
  );
};

ViewAllBooks.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default ViewAllBooks;
