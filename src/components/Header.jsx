
import './css/Header.css'
function Header() {
    return (
       <header className="header">
        <h1 className='page-title'>🍿MyMovieList</h1>
        <input type="searc" placeholder="Search movies.."  />
        <h4 className="header-result">Found <span className='count'>10</span> results</h4>
       </header>
    )
}

export default Header
