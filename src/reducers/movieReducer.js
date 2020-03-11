import { FETCHING, SUCCESS, ERROR, GET_MOVIE } from "../constants/action";

export const movieReducer = (state = [], { type, response }) => {
  switch (type) {
    case `${GET_MOVIE}_${FETCHING}`:
      return { ...state, isFetching: true, response: [] };
    case `${GET_MOVIE}_${SUCCESS}`:
      return { ...state, isFetching: false, response: response.data };
    case `${GET_MOVIE}_${ERROR}`:
      return { ...state, isFetching: false, response: response.data };

    default:
      return state;
  }
};
