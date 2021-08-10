import React, { useEffect } from "react";
import { useState } from "react";
import "./Row.css";
import axios from "../../axios";
// import requests from "../../Requests";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);
  return (
    <div class="row">
      <h2>{title}</h2>
      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            key={movie.id}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
