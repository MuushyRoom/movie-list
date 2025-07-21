import "./css/WatchList.css";
function WatchList() {
  return (
    <div className="movies-watched-container">
      <div className="card-movies-stats">
        <section>
          <h4>MOVIES YOU WATCHED</h4>
        </section>
        <section className="movie-list-details">
          <p className="movie-count">0 movies</p>
          <p className="movie-rating">⭐0.00</p>
          <p className="movie-duration">0 min</p>
        </section>
      </div>
    </div>
  );
}

export default WatchList;
