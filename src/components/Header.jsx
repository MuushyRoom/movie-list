
import './css/Header.css'
function Header({movieCounts}) {
    return (
       <header className="header">
        <h1 className='page-title'>🍿MyMovieList</h1>
        <form action="">
              <input type="searc" placeholder="Search movies.."  />
        </form>
        <h4 className="header-result">Found <span className='count'>{movieCounts}</span> results</h4>
       </header>
    )
}

export default Header
