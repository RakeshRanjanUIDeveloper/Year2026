import React, { useState, useEffect } from "react";
import Bookshelf from "../components/BookShelf";
import Navbar from "../components/Navbar";
import booksData from "../data/books.json";

const Home = () => {
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
      <Navbar />
      <Bookshelf
        title="Currently Reading"
        books={books.filter((book) => book.shelf === "currentlyReading")}
        onShelfChange={handleShelfChange}
      />
      <Bookshelf
        title="Want to Read"
        books={books.filter((book) => book.shelf === "wantToRead")}
        onShelfChange={handleShelfChange}
      />
      <Bookshelf
        title="Read"
        books={books.filter((book) => book.shelf === "read")}
        onShelfChange={handleShelfChange}
      />
    </div>
  );
};

export default Home;
