import './css/Movies.css'

function Movies({movies,onSelectMovie}) {
    
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
        <ul className="movie-list">
            {
                 movies.map((movie,id)=>{
    
                    return <li className='movie' key={id} onClick={()=>{onSelectMovie(movie.id,id)}}>
                        <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                        <section className='movie-description'>
                             <p className='title'>{movie.title}</p>
                             <p>Ratings: {movie.vote_average.toFixed(0)}0%</p>
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
                        <p className='year'>Release date: {movie.release_date}</p>
                       
                        
                        </section>
                    </li>
                    
                })
            }
          
        </ul>
    )
}

export default Movies
