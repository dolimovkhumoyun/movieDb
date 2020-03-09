import axios from "axios";

const url = "https://api.themoviedb.org/3";
const key = "06aa50e38281dd9b38543df33f8bab2c";
// const mustVars = `language=en-US&api_key=${key}`; // language + authentication key

export const getMovies = async dispatch => {
  let api_url = url + `/movie/popular?language=en-US&api_key=${key}&page=0$`;
  const response = await axios.get(api_url);
  dispatch({ type: "ADD_BOOK", state: response.data });
};
