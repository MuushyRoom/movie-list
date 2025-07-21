import './css/Movies.css'

function Movies({movies,onSelectMovie}) {
    
    return (
        <ul className="movie-list">
            {
                 movies.map((movie,id)=>{
    
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
    )
}

export default Movies
