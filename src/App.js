import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//Api key: 6ad1153b
const API_URL = "http://www.omdbapi.com/?apikey=6ad1153b";
const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie("spiderman");
  }, [])
  
  return (
    <div className="App">
      <h1>Movie World</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
      </div>
      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
