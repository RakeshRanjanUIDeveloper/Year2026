<<<<<<< HEAD
import React from 'react'
import SearchFilter from './components/SearchFilter'
import ProductsFilter from './components/ProductsFilter'
=======
import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
>>>>>>> d94e1cb829af60b19480466afa70dbc52bc471bb

const App = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    })
    setBooks(updatedBooks)
  }
  const editBookById = (id, newTitle) =>{
    const updatedBooks = books.map((book) =>{
      if(book.id === id){
        return {...book, title:newTitle}
      }
      return book
    })
    setBooks(updatedBooks)
  }
  const createBook = (title) =>{
    const updatedBooks = [
      ...books,
      {id:Math.round(Math.random()*9999), title}
    ]
    setBooks(updatedBooks)
  }
  return (
<<<<<<< HEAD
    <React.Fragment>
      <ProductsFilter />
    </React.Fragment>
=======
    <div className='app'>
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>
>>>>>>> d94e1cb829af60b19480466afa70dbc52bc471bb
  )
}
 
export default App