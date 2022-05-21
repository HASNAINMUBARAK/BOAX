import { configureStore } from "@reduxjs/toolkit";
import post from "./Features/Artwork/postSlicer";
import single from "./Features/Creator/singleSlicer";
export const store = configureStore({
  reducer: {
    postSlicer: post,
    singleSlicer: single,
  },
});
