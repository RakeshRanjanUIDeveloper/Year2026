import React, { useState } from "react";
import Book from "./Book";

const Search = ({ books, onShelfChange }) => {
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} onShelfChange={onShelfChange} />
        ))}
      </div>
    </div>
  );
};

export default Search;
