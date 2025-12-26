import React, { useState } from "react";

const Books = ({ books }) => {

    const [allBooks, setAllBooks] = useState(books);

  const uniqueGenre = ["All Genres", ...new Set(books.map((b) => b.genre))];
  console.log(uniqueGenre);

  const handleTab = (tabName) =>{
    if(tabName === 'All Genres'){
        setAllBooks(books)
    }else{
        setAllBooks(books.filter((b) => b.genre === tabName))
    }
  }
  return (
    <React.Fragment>
      <div className="genre-container">
        {uniqueGenre.map((g) => (
          <div className="genre" onClick={() => handleTab(g)}>{g}</div>
        ))}
      </div>
      <div className="books-container">
        {
            allBooks.map((b)=>(
                <div className="book" key={b.id}>
                    <h3>{b.title}</h3>
                    <h4>{b.author}</h4>
                </div>
            ))
        }
      </div>
    </React.Fragment>
  );
};

export default Books;
