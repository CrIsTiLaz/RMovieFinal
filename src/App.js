import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import MovieCard from "./components/MovieCard";

function App() {
  const API_URL="https://api.themoviedb.org/3/"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
}, [])

  const fetchMovies = async() =>{
    const{ data: {results}}= await axios.get(`${API_URL}/discover/movie`, {
      params: {
       api_key: process.env.REACT_APP_MOVIE_API_KEY
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

  return (
    <div className="App">
      <h1>Hello YouTube</h1>
      <div className="container">
        {renderMovies()}
      </div>
    </div>
  );
}

export default App;
