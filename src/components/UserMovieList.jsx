import "./css/UserMovieList.css";
import FavoriteMovies from "./FavoriteMovies";
import WatchList from "./WatchList";

function UserMovieList({ favoriteMovies, watchList }) {
  console.log(favoriteMovies);
  console.log(watchList);
  return (
    <div className="user-movies-info-container">
  
      <ul className="user-movie-list">
        <li className="user-movie-item">
          <h3 className="movie-item-title">Favorites</h3>
          {favoriteMovies.length > 0? <FavoriteMovies favoriteMovies={favoriteMovies} />:<p>Your favorite list is currently empty.</p>}
         
        </li>
        <li className="user-movie-item">
          <h3 className="movie-item-title">Watch List</h3>
          {watchList.length > 0 ? (
            <WatchList watchList={watchList} />
          ) : (
            <p>Your watchlist is currently empty.</p>
          )}
        </li>
      </ul>
    </div>
  );
}

export default UserMovieList;
