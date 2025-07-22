import './css/WatchList.css'
import { useContext } from "react";
import { userMovieListContext  } from "../App";

function WatchList() {


    const [,watchList] = useContext(userMovieListContext);
    return (
         <ul className="watchlist-container">
         {
                watchList.map((movie,id)=>{
    
                    return <li className='watchlist-movie' key={id}>
                     
            <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/>

           

                <section className='movie-description'>
                             <p className='title'>{movie.title}</p>
                             <p>Ratings: {movie.vote_average.toFixed(0)}0%</p>
                        <p className='year'>Release date: {movie.release_date}</p>
                       
                          <button className="btn">Remove from favorites</button>
                        </section>
                    </li>
                    
                })
            }
      </ul>
    )
}

export default WatchList
