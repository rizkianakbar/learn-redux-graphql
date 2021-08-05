import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeList: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
});

export const {} = HomePageSlice.actions;
export default HomePageSlice.reducer;
