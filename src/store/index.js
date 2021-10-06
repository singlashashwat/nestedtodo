import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
// import { Action } from "redux";
// import { ThunkAction } from "redux-thunk";
// Middlewares
import logger from "redux-logger";
import { asynchronousAPIMiddleware } from "./middlewares/asynchronousAPIMiddleware";
import { routingMiddleware } from "./middlewares/routingMiddleware";
import { loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(asynchronousAPIMiddleware)
      .concat(routingMiddleware),
});
