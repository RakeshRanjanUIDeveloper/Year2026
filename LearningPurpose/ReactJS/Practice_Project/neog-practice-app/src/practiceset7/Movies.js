import React, { useEffect, useState } from "react";
import { fakeMoviesFetch } from "./fakeMoviesFetch";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]); // Original
  const [filteredMovies, setFilteredMovies] = useState([]); // OnChange it will update

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await fakeMoviesFetch(
          "https://example.com/api/movies"
        );
        if (response.status === 200) {
          setMoviesData(response.data);
          setFilteredMovies(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesData();
  }, []);
  const uniqueYears = [...new Set(moviesData.map((movie) => movie.year))];
  const handleyear = (year) => {
    if (year === "all") {
      setFilteredMovies(moviesData);
    } else {
      const filteredData = moviesData.filter(
        (movie) => movie.year === Number(year)
      );
      setFilteredMovies(filteredData);
    }
  };
  return (
    <React.Fragment>
      <label htmlFor="Movies">Choose Year:</label>
      <select onChange={(e) => handleyear(e.target.value)}>
        <option value="all">All Years</option>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div className="movies-list">
        {filteredMovies.map((movie) => (
          <div className="movie">
            <p>
              <b>Title :</b> {movie.title}
            </p>
            <p>
              <b>Year :</b> {movie.year}
            </p>
            <p>
              <b>Rating :</b> {movie.rating}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Movies;
