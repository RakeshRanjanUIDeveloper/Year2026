import React from "react";
import Book from "./Book";

const Bookshelf = ({ title, books, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2>{title}</h2>
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} book={book} onShelfChange={onShelfChange} />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
