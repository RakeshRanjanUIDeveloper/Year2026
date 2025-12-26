import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../components/BookContext";
import { useNavigate } from "react-router";

const AllBooks = () => {
  const { allBooks, allFavorites, handleFavorites, allRead, handleRead } = useContext(BookContext);
  const navigate = useNavigate();
  const isFavorite = (id) => allFavorites.some((book) => book.id === id);
  const isRead = (id) => allRead.some((book) => book.id ===id)
  console.log(allFavorites);
 
  
  return (
    <div>
      <div className="books-list">
        {allBooks.map((book) => (
          <div className="book" key={book.id}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
            <p><b>Author - </b>{book.author}</p>
            <p><b>Publisher - </b>{book.publisher}</p>
            <button onClick={() => {
              if(isFavorite(book.id)){
                navigate("/favorites")
              }else{
                handleFavorites(book)
              }
            }}> {isFavorite(book.id) ? "Go to Fav" : "Add to Fav"}</button>

            <button onClick={() =>{
              if(isRead(book.id)){
                navigate("read")
              }else{
                handleRead(book)
              }
            }}>{isRead(book.id) ? "Already Read" : "Mark As Read"}</button>
          </div>
        ))}
        
      </div>
     
    </div>
  );
};

export default AllBooks;
