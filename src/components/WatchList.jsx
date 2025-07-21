import "./css/WatchList.css";
function WatchList({moviesWatched}) {
  return (
    <div className="movies-watched-container">
      <div className="card-movies-stats">
        <section>
          <h4>MOVIES YOU WATCHED</h4>
        </section>
        <section className="movie-list-details">
          <p className="movie-count">{moviesWatched || 0} movies</p>
          <p className="movie-rating">⭐0.00</p>
          <p className="movie-duration">0 min</p>
        </section>
      </div>
      <ul className="movies-watched-container">
        {
             moviesWatched &&  moviesWatched.map((movie,id)=>{
    
                    return <li className='movie' key={id} onClick={()=>{onSelectMovie(movie.id,id)}}>
                        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                        <section className='movie-description'>
                             <p className='movie-title'>{movie.original_title}</p>
                        <p className='movie-year'>📅{movie.release_date}</p>
                        </section>
                    </li>
                    
                })
        }
      </ul>
    </div>
  );
}

export default WatchList;
