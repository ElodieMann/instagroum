import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import user from "./redux/user";
import stories from './redux/stories'
import modalStory from './redux/modalStory'

const reducers = combineReducers({
  user,
  stories,
  modalStory
});

const middleware = (getDefaultMiddleware) => {
  if (process.env.NODE_ENV === "development") {
    return [...getDefaultMiddleware(), logger];
  }
  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: reducers,
  middleware: middleware,  
});

export { store };
