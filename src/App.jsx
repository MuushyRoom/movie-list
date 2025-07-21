import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails";
import { api_key } from "../api_files/api";

function App() {
  // movies
  const [movies, setMovies] = useState([]);
  // IF A MOVIE IS SELECTED
  const [isSelected, setIsSelected] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState();

  const [userMovieList, setUserMovieList] = useState([]);

  const [resultCount, setResultCount] = useState();
  // GETTING MOVIE DATA
  async function getMovies() {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      console.log("fetch movies error", e);
    }
  }

  // FETCH DATA AT THE START OF WEBSITE
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setResultCount(movies.length);
  }, [movies]);

  function handleSelectedMovie(_id, index) {
    if (isSelected && selectedMovie.id == _id) {
      setIsSelected(false);
    } else {
      setSelectedMovie(movies[index]);
      setIsSelected(true);
    }
  }

  return (
    <>
      <Header movieCounts={resultCount} />
      <div className="main-container">
        <main className="main-content">
          {/*         when a movie is clicked               pass movies           */}
          <Movies onSelectMovie={handleSelectedMovie} movies={movies}></Movies>
          {/*                MOVIE DESCRIPTION                       WATCHED LIST                            */}
          {isSelected ? (
            <MovieDetails movie={selectedMovie} />
          ) : (
            <WatchList watchedMovies={userMovieList} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
