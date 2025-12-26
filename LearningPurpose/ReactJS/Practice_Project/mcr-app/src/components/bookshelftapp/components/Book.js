import React from "react";

const Book = ({ book, onShelfChange }) => {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <select
          value={book.shelf}
          onChange={(e) => onShelfChange(book, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
  );
};

export default Book;
