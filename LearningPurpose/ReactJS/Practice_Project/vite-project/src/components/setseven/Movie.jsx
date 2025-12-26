import React, { useEffect, useState } from 'react';
import { fakeMovieFetch } from './fakeMovieFetch';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fakeMovieFetch('https://example.com/api/movies');
                setMovies(response.data);
                setFilterMovies(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, []);

    const handleYear = (e) => {
        const selectedYear = e.target.value;
        if (selectedYear === "") {
            setFilterMovies(movies); // Reset to all movies when "All" is selected
        } else {
            setFilterMovies(movies.filter((m) => m.year === Number(selectedYear)));
        }
    };

    return (
        <React.Fragment>
            <h2>Movies</h2>
            <label htmlFor="years">Choose a Year</label>
            <select id="years" onChange={handleYear}>
                <option value="">All</option>
                {[...new Set(movies.map((m) => m.year))].map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <div className="movies-list">
                {filterMovies.map((m, index) => (
                    <div className="movie" key={index}>
                        <h2>{m.title}</h2>
                        <p><b>Year:</b> {m.year}</p>
                        <p><b>Rating:</b> {m.rating}</p>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Movie;
