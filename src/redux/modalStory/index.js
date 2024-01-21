//index.js
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./modalStory.state";
import ConfigReducer from "./modalStory.reducer";

const ConfigSlice = createSlice({
  name: "modalStory",
  initialState,
  reducers: ConfigReducer,
});

export const { setOpenModal } = ConfigSlice.actions;

export default ConfigSlice.reducer;
