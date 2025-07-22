import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import UserMovieList from "./components/UserMovieList";
import MovieDetails from "./components/MovieDetails";
import { api_key } from "../api_files/api";


// 
export const userMovieListContext = createContext();


function App() {


  // movies
  const [movies, setMovies] = useState([]);
  // IF A MOVIE IS SELECTED
  const [isSelected, setIsSelected] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState();

  const [resultCount, setResultCount] = useState();

  const [watchLists, setWatchLists] = useState([]);
  const [favorites, setFavorites] = useState([]);



//  const contextValue = useMemo(() => ({
//     favorites,
//     watchLists,
//     // Include setter functions if child components need to update
//     setFavorites,
//     setWatchLists
//   }), [favorites, watchLists]);





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

  function showMovieDetails(_id, index) {
    if (isSelected && selectedMovie.id == _id) {
      setIsSelected(false);
    } else {
      setSelectedMovie(movies[index]);
      setIsSelected(true);
    }
  }

  function AddToFavorites(movie_id) {
    const selectedMovie = movies.find(({ id }) => id === movie_id)
    setFavorites([...favorites, selectedMovie]);
  }

  const addToWatchList = (movie_id) => {
    const selectedMovie = movies.find(({ id }) => id === movie_id)
    setWatchLists([...watchLists, selectedMovie]);
  };

  return (
    <>
      <Header movieCounts={resultCount} />
      <div className="main-container">
        <main className="main-content">
          {/*         when a movie is clicked               pass movies           */}
          <Movies onSelectMovie={showMovieDetails} movies={movies}></Movies>
          {/*                MOVIE DESCRIPTION                       WATCHED LIST                            */}
          {isSelected ? (
            <MovieDetails
              movie={selectedMovie}
              onAddToWatchList={addToWatchList}
              onAddToFavorites={AddToFavorites}
            />
          ) : (

            <userMovieListContext.Provider value={[favorites,watchLists]}>
              <UserMovieList/>
            </userMovieListContext.Provider>   
          )}
        </main>
      </div>
    </>
  );
}

export default App;
