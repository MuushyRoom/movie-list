import './css/Movies.css'

function Movies({onSelectMovie,movies}) {
    
    return (
        <ul className="movie-list">
            {

                 movies.map((movie,id)=>{
                    return <li className='movie' key={id} onClick={()=>{onSelectMovie(id)}}>
                        <img className='movie-poster' src={movie.Poster} alt={movie.title} />
                        <section className='movie-description'>
                             <p className='movie-title'>{movie.Title}</p>
                        <p className='movie-year'>📅{movie.Year}</p>
                        </section>
                    </li>
                    
                })
            }
          
        </ul>
    )
}

export default Movies
