import React from "react";

const MovieCard = ({ movie }) => { 

    return (
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt="poster"
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <p>{movie.Title}</p>
        </div>
      </div>
    );
}

export default MovieCard