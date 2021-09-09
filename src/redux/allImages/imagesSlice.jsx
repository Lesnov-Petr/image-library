import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  images: [],
  isLoading: false,
  error: null,
  modal: false,
  search: "",
  largeImage: {
    link: "",
    alt: "",
    index: 0,
  },
};

const { actions, reducer } = createSlice({
  name: "images",
  initialState: initialUserState,
  reducers: {
    downloadImagesRequest: (state) => {
      state.isLoading = true;
    },
    downloadImagesSuccess: (state, { payload }) => {
      state.images = payload;
      state.isLoading = false;
      state.error = null;
    },
    downloadImagesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    loadMoreRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    loadMoreImagesSuccess: (state, { payload }) => {
      state.images = [...state.images, ...payload];
      state.isLoading = false;
    },
    loadMoreImagesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
    setLargeImage: (state, { payload }) => {
      state.largeImage = payload;
    },

    setSearchText: (state, { payload }) => {
      state.search = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
