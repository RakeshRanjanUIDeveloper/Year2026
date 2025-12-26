import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import booksData from "../data/books.json";

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const handleShelfChange = (book, newShelf) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, shelf: newShelf } : b
    );
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <Search books={books} onShelfChange={handleShelfChange} />
    </div>
  );
};

export default SearchPage;
