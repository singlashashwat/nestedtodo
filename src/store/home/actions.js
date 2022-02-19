import { GET_DATA, SET_DATA } from "./types";

export const actions = {
  getData: () => ({
    type: GET_DATA,
  }),
  setData: (data) => ({
    type: SET_DATA,
    payload: data,
  }),
};
