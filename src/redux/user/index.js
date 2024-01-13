import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.state";
import ConfigReducer from "./user.reducer";

const ConfigSlice = createSlice({
  name: 'user',
  initialState,
  reducers: ConfigReducer,
});

export const { setUser } = ConfigSlice.actions;

export default ConfigSlice.reducer;