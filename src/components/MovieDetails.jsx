import "./css/MovieDetails.css";
 
function MovieDetails({ movie,onAddToWatchList,onAddToFavorites}) {
  const movieGenre = 
   {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

 


  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <section className="img-container">
          <img
            className="movie-card-poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </section>
        <section className="movie-details">
          <p className="movie-title">{movie.original_title}</p>
          <p className="release-date">Release date: {movie.release_date}</p>
         
            
           <ul className="genres">
                 {
                   
                  movie.genre_ids.map((genres,id)=>{
                    const lastValue = movie.genre_ids.length - 1
                return <li className="genre" key={id}>
                {movie.genre_ids[lastValue] == genres?`${movieGenre[genres]} `:`${movieGenre[genres]},`}
                 
                </li>

             })     
            }
          </ul>
          <p>Ratings: {movie.vote_average.toFixed(0)}0%</p>
          <p className="movie-desc">{movie.overview}</p>

          <section className="btn-container">
            <button onClick={()=>{
              onAddToFavorites(movie.id)
            }}>Add to Favorites</button>
            <button onClick={()=>{
                onAddToWatchList(movie.id)
            }}>Add to Watch List</button>
          </section>
        </section>

            

      </div>
      <div className="movie-details-info">
         
        <section className="overview-container">
          <p>{movie.overview}</p>
        </section>
        <p></p>
      </div>
    </div>
  );
}

export default MovieDetails;
