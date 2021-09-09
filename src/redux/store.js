import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./allImages";

const store = configureStore({
  reducer: {
    images: reducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export { store };
