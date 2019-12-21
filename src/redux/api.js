import axios from "axios";
import { url } from "./consts";

const key = "06aa50e38281dd9b38543df33f8bab2c";
const mustVars = `language=en-US&api_key=${key}`; // language + authentication key

const getMovies = async page => {
  let api_url =
    url + `/movie/popular?language=en-US&api_key=${key}&page=${page}`;
  const response = await axios.get(api_url);
  return response.data;
};

const getMovie = async movie_id => {
  let api_url = url + `/movie/${movie_id}?${mustVars}`;
  const response = await axios.get(api_url);
  return response.data;
};

const getGenres = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + key
  );
  return response.data;
};

export { getMovies, getGenres, getMovie };
