import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import MovieCard from "./components/MovieCard";

function App() {
  const API_URL="https://api.themoviedb.org/3/"
  const [movies, setMovies] = useState([])
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
      <header>
        <h1>Hello YouTube</h1>
        <form onSubmit={searchMovies}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="container">
        {renderMovies()}
      </div>
    </div>
  );
}

export default App;
