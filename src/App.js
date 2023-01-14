import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import MovieCard from "./components/MovieCard";

function App() {
  const API_URL="https://api.themoviedb.org/3/"
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  const [searchKey, setSearchKey] = useState("")


  useEffect(() => {
    fetchMovies()
}, [])

  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const{ data: {results}}= await axios.get(`${API_URL}/${type}/movie`, {
      params: {
       api_key: process.env.REACT_APP_MOVIE_API_KEY,
       query: searchKey
      }   
    })
    setSelectedMovie(results[0])
    setMovies(results)
    // console.log("data", data);
  }

  const renderMovies = () =>(
    movies?.map(movie => (
    <MovieCard
      key={movie.id}
      movie={movie}/>))
      
  )

  console.log('movies', movies)

  const searchMovies =(e) =>{
    e.preventDefault()
    fetchMovies(searchKey)
  }

  return (
    
    <div className="App">
      <header className={"header"}>
        <div className="header-content max-center">
          <span>Hello YouTube</span>
            <form onSubmit={searchMovies}>
              <input type="text" onChange={(e) => setSearchKey(e.target.value)}></input>
              <button type="submit">Search</button>
            </form>
        </div>

      </header>
      <div className="hero" style={{backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')`}}>
        <div className="hero-content max-center" >
          <button className={"button"}>Play Trailer</button>
          <h1 className={"hero-title"}>{selectedMovie.title}</h1>
          {selectedMovie.overview? <p className={"hero-overview"}>{selectedMovie.overview}</p>: null}
        </div>
      </div>
      <div className="container max-center">
        {renderMovies()}
      </div>
    </div>
  );
}

export default App;
