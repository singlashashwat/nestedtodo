import { GET_DATA, SET_DATA } from "./types";

export function getData() {
  return {
    type: GET_DATA,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    data: {
      data,
    },
  };
}
