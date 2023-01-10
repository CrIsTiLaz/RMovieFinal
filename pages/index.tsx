import Head from 'next/head'
import Image from 'next/image'
import Heror from '../components/Heror'
import axios from "axios";
import { server } from '../config';
import PopularMovie from '../components/PopularMovie';

export default function Home({ movies }) {
  return (
    <div>
      <Heror />
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1