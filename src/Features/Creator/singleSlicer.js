import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingle = createAsyncThunk(
  "single/getSingle/pending",
  async () => {
    const { data } = await axios.get(
      "http://boax.alshumaal.com/admin/admin/api/nfts/readFeaturedArt.php"
    );
    return data.nfts;
  }
);

const initialState = {
  single: [],
  singleLoading: false,
  singleSuccess: false,
  singleFailed: false,
};

const single = createSlice({
  name: "single",
  initialState,
  reducers: {
    setInput: (state, action) => {
      if (action.payload != null) {
        state.single = state.single.filter((item) => {
          if (item.name[0].toLowerCase() === action.payload[0].toLowerCase()) {
            return item;
          }
        });
      }
    },
  },
  extraReducers: {
    [getSingle.pending]: (state) => {
      state.singleLoading = true;
      state.singleSuccess = false;
      state.singleFailed = false;
    },
    [getSingle.fulfilled]: (state, action) => {
      state.singleSuccess = true;
      state.singleFailed = false;
      state.singleLoading = false;
      state.single = action.payload;
    },
    [getSingle.rejected]: (state) => {
      state.singleFailed = true;
      state.singleSuccess = false;
      state.singleLoading = false;
    },
  },
});
export const { setInput } = single.actions;
export default single.reducer;
