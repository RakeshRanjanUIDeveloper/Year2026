import React, { useContext } from "react";
import { BookContext } from "../components/BookContext";

const Read = () => {
  const { allRead } = useContext(BookContext);

  return (
    <React.Fragment>
      <div className="books-list">
        {allRead.map((book) => (
          <div className="book" key={book.id}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
            <p>
              <b>Author - </b>
              {book.author}
            </p>
            <p>
              <b>Publisher - </b>
              {book.publisher}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Read;
