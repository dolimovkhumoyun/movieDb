import { FETCHING, SUCCESS, ERROR } from "./../constants/action";

export const fetching = TYPE => ({ type: `${TYPE}_${FETCHING}` });
export const success = (TYPE, response) => ({
  type: `${TYPE}_${SUCCESS}`,
  response
});
export const error = (TYPE, response) => ({
  type: `${TYPE}_${ERROR}`,
  response
});
