import Header from "./component/Header";
import Search from './component/Search'
import Card from "./component/Card";
import{useEffect, useState} from 'react'




function App() {
const API_URL = 'http://www.omdbapi.com?apikey=95f51dae'
const [movies, setMovies] = useState([]);

useEffect (()=>{
  searchMovie('')
}, [])

const searchMovie = async (title) =>{
  const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
  
    setMovies(data.Search)
  }


  return (
    <>
      <Header></Header>
      <Search searchMovie={searchMovie}></Search>
      {
        movies?.length > 0
        ?(
        <Card movies={movies}></Card>
        ) : (
          <h3 style={{
            color:'white',
            marginTop: '60px',
            marginLeft: '60px'
          }}>No movies selected!</h3>
        )
      }
      
    </>
  );
}

export default App;
