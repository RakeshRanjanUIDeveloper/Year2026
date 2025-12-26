import React, { useEffect, useState } from 'react'
import { fakeMoviesListFetch } from './fakeMoviesListFetch'

const MoviesList = () => {
    const [allMovies, setAllMovies] = useState([]); // Original
    const [filteredMovies, setFilteredMovies] = useState([]); // Filter
    useEffect(() =>{
        const fetchMovieListData = async() =>{
            try {
                const response = await fakeMoviesListFetch('https://example.com/api/movies');
                if(response.status === 200){
                    setAllMovies(response.data)
                    setFilteredMovies(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovieListData();
    }, []);

    const uniqueGenre = [...new Set(allMovies.map((movie) => movie.genre))];

    const handleMovieGenre = (genre) => {
        if(genre === 'all'){
            setFilteredMovies(allMovies)
        }else{
            const filterData = allMovies.filter((movie) => movie.genre === genre);
            setFilteredMovies(filterData)
        }
    }
  return (
    <React.Fragment>
        <label htmlFor='movies'><b>Select Movie Genre : </b></label>
        <select onChange={(e) => handleMovieGenre(e.target.value)}>
            <option value={'all'}>All</option>
            {
                uniqueGenre.map((genre) => (
                    <option>{genre}</option>
                ))
            }
        </select>
        <div className='movies-list'>
            {
                filteredMovies.map((movie) =>(
                    <div className='movie'>
                        <p><b>Title : </b>{movie.title}</p>
                        <p><b>Year : </b>{movie.year}</p>
                        <p><b>Genre : </b>{movie.genre}</p>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default MoviesList