const listImages = (state) => state.images.images;
const isModal = (state) => state.images.modal;
const isLargeImage = (state) => state.images.largeImage;
const isSearchText = (state) => state.images.search;
const isLoading = (state) => state.images.isLoading;

export { listImages, isModal, isLargeImage, isSearchText, isLoading };
