import React, { useState } from 'react'

const Books = ({books}) => {
    const [filter, setFilter] = useState("All");
    const handFilter = (genre) => {
        setFilter(genre)
    }
    const filteredItem = filter === 'All' ? books : books.filter((item) => item.genre === filter);
  return (
    <React.Fragment>
        <button onClick={()=> handFilter('All')}>All Genres</button>
        <button onClick={()=> handFilter('Classic')}>Classic</button>
        <button onClick={()=> handFilter('Dystopian')}>Dystopian</button>
        <button onClick={()=> handFilter('Young Adult')}>Young Adult</button>
        <ol>
            {
                filteredItem.map((book) => ( <li key={book.id}>{book.title} - {book.author} - <b>{book.genre}</b></li>))
            }
        </ol>
    </React.Fragment>
  )
}

export default Books