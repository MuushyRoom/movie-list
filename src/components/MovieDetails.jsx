import './css/MovieDetails.css'

function MovieDetails({movie}) {
    console.log(movie)
    return (
       <div className="movie-details-container">
        <div className="movie-details-card">
            <section className='img-container'>
            <img className='movie-card-poster' src={movie.Poster} alt={movie.Title} />
            </section>
            <section className="movie-details">
               <p>{movie.Title}</p>
               <p>{movie.Year}</p>
            </section>
        </div>
        <div className="movie-details-info">
            <h3>⭐⭐⭐⭐⭐⭐⭐⭐⭐</h3>
        </div>
        
    </div>
    )
}

export default MovieDetails
