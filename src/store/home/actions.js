import { GET_DATA, SET_DATA, SET_FILTER } from "./types";

export function getData() {
  return {
    type: GET_DATA,
    async: true,
    url: `https://jsonplaceholder.typicode.com/todos`,
    method: "GET",
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

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    data: {
      filter,
    },
  };
}
