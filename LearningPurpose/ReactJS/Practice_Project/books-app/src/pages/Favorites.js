import React, { useContext, useEffect } from 'react'
import { BookContext } from '../components/BookContext'

const Favorites = () => {
  const {allFavorites} = useContext(BookContext);
  
  return (
   <React.Fragment>
   <div className="books-list">
   {allFavorites.map((book) => (
     <div className="book" key={book.id}>
       <img src={book.image} alt={book.title} />
       <p>{book.title}</p>
       <p><b>Author - </b>{book.author}</p>
       <p><b>Publisher - </b>{book.publisher}</p>
     </div>
   ))}
 </div>
   </React.Fragment>
  )
}

export default Favorites