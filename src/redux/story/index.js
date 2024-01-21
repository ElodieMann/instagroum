import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./story.state";
import ConfigReducer from "./story.reducer";

const ConfigSlice = createSlice({
  name: "story",
  initialState,
  reducers: ConfigReducer,
});

export const { setStory, setLike, setComment, addStory, setFav } = ConfigSlice.actions;

export default ConfigSlice.reducer;
