import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import user from "./redux/user";
import story from './redux/story'
import modalStory from './redux/modalStory'

const reducers = combineReducers({
  user,
  story,
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
