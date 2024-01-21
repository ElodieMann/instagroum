import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./stories.state";
import ConfigReducer from "./stories.reducer";

const ConfigSlice = createSlice({
  name: "stories",
  initialState,
  reducers: ConfigReducer,
});

export const { setStory, setLike, setComment, addStory, setFav } = ConfigSlice.actions;

export default ConfigSlice.reducer;
