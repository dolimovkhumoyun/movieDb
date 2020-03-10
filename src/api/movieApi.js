import axios from "axios";
import { GET_MOVIES, GET_GENRES } from "./../constants/action";
import { success, fetching, error } from "../actions";

const url = "https://api.themoviedb.org/3";
const key = "06aa50e38281dd9b38543df33f8bab2c";
// const mustVars = `language=en-US&api_key=${key}`; // language + authentication key

export const getMovies = (dispatch, page) => {
  let api_url =
    url + `/movie/popular?language=en-US&api_key=${key}&page=${page}`;
  makeRequest(api_url, dispatch, GET_MOVIES, {
    verb: "get",
    params: {}
  });
};

export const getGenres = async dispatch => {
  let api_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + key;

  makeRequest(api_url, dispatch, GET_GENRES, {
    verb: "get",
    params: {}
  });
};

export const searchMovie = async (dispatch, input) => {
  let api_url = `${url}/search/movie/?api_key=${key}&query=${input}`;
  makeRequest(api_url, dispatch, GET_MOVIES, {
    verb: "get",
    params: {}
  });
};

export const makeRequest = async (
  url,
  dispatch,
  type,
  { verb = "get", params = {} } = {}
) => {
  dispatch(fetching(type));
  try {
    const response = await axios[verb](url, params);
    dispatch(success(type, response));
  } catch (e) {
    dispatch(error(type, e));
  }
};
