import "./css/UserMovieList.css";
import FavoriteMovies from "./FavoriteMovies";
import WatchList from "./WatchList";

function UserMovieList({ favoriteMovies, watchList }) {
  console.log(favoriteMovies);
  console.log(watchList);
  return (
    <div className="user-movies-info-container">
      <div className="card-movies-stats">
        <section>
          <h4>MOVIES YOU WATCHED</h4>
        </section>
        <section className="movie-list-details">
          <p className="movie-count">Favorite Movies</p>
          <p className="movie-rating">⭐0.00</p>
          <p className="movie-duration">0 min</p>
        </section>
      </div>

      <ul className="user-movie-list">
        <li className="user-movie-favorites-container">
          <h3>Favorites</h3>

          {favoriteMovies.length > 0? <FavoriteMovies favoriteMovies={favoriteMovies} />:<p>Your favorite list is currently empty.</p>}
         
        </li>
        <li className="user-movie-watchlist-container">
          <h3>Watch List</h3>
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
