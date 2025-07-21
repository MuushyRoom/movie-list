import { useContext } from 'react';
function FavoriteMovies({favoriteMovies}) {

    return (
         <ul className="movies-watched-container">
         {
                 favoriteMovies.map((movie,id)=>{
    
                    return <li className='movie' key={id}>
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

export default FavoriteMovies
