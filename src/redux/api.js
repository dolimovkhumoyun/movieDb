import axios from "axios";
import { url, key } from "./consts";
import io from "socket.io-client";

const socket = io("192.168.1.6:8080/api");

const getMovies = async () => {
  let api_url = url + "/movie/popular?language=en-US&api_key=" + key;
  const response = await axios.get(api_url);
  return response.data;
};

const getGenres = async () => {
  let api_url = url + "/genre/movie/list?api_key=" + key;
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  return response.data;
};

const emitLogin = async (username, password) => {
  socket.emit("login", { username, password });
};

export { getMovies, getGenres, emitLogin, socket };
