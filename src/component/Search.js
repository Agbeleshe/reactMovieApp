import './search.css'
import { useState } from 'react'

const Search = ({searchMovie}) =>{
const [searchTerm, setSearchTerm] = useState('')


    return(
        <div className="container">
            <input onChange={(e)=> setSearchTerm(e.target.value)} value={searchTerm} className='search' placeholder='Search for a movie'></input>
            <i onClick={() => searchMovie(searchTerm)} className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default Search