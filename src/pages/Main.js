import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Layout from "../components/Layout";
import YouTube from "react-youtube"
function App() {
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_PATH2 = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";

    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: searchKey,
      },
    });
    setSelectedMovie(results[0]);
    setMovies(results);
    // console.log("data", data);
  };

  const selectMovie= async (movie) =>{
    const data = await fetchMovie(movie.id)
    // console.log("movie data ", data);
    setSelectedMovie(movie)
  }

  const fetchMovie = async(id)=>{
    const {data} = await axios.get(`${API_URL}/movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
      append_to_response: 'videos'
    }
  })
    return data;
  }

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        selectMovie={selectMovie}
      />
    ));

  // console.log("movies", movies);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  const renderTrailer = () =>{
    const trailer = selectedMovie.videos.results.find(vid => vid.name === 'Official Trailer')
    // const trailer = selectedMovie.videos.results
    console.log( trailer)
    return(
      <YouTube
        videoId={trailer.key}
      />
    )
  }

  return (
    <Layout>
      <div className="App">
        <div className="header-content">
        {/* <span>Hello YouTube</span> */}
        <form onSubmit={searchMovies}>
            <input
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
            ></input>
            <button type="submit">Search</button>
          </form>
          </div> 
        </div>
        <div
          className="hero"
          style={{
            backgroundImage: `url('${IMAGE_PATH2}${selectedMovie.backdrop_path}')`,
          }}
        >
          <div className="hero-content max-center">
            {selectedMovie.videos ? renderTrailer(): console.log(selectedMovie)}
            <h1 className={"hero-title"}>{selectedMovie.title}</h1>
            {selectedMovie.overview ? (
              <p className={"hero-overview"}>{selectedMovie.overview}</p>
            ) : null}
          </div>
        </div>
        <div className="container max-center">{renderMovies()}</div>
    </Layout>
  );
}

export default App;
