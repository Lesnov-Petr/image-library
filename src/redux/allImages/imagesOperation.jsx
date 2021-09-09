import fetchImage from "../../service";
import { actions } from "./imagesSlice";

const {
  downloadImagesRequest,
  downloadImagesSuccess,
  downloadImagesError,
  loadMoreRequest,
  loadMoreImagesSuccess,
  loadMoreImagesError,
} = actions;

const loadingImages = (search) => async (dispatch) => {
  dispatch(downloadImagesRequest());
  try {
    const { data } = await fetchImage.quiry(search);
    dispatch(downloadImagesSuccess(data.hits));
  } catch (error) {
    dispatch(downloadImagesError(error.message));
  }
};

const loadingMoreImages = (search) => async (dispatch) => {
  dispatch(loadMoreRequest());
  try {
    const { data } = await fetchImage.quiry(search);
    dispatch(loadMoreImagesSuccess(data.hits));
    window.scrollTo(0, document.documentElement.offsetHeight);
  } catch (error) {
    dispatch(loadMoreImagesError(error.message));
  }
};
export { loadingImages, loadingMoreImages };
