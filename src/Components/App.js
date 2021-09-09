import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import ListImages from "./ListImages";
import FormSearch from "./FormSearch";
import Modal from "./Modal";
import "../sass/main.scss";
import {
  isModal,
  isLoading,
  isSearchText,
  listImages,
  loadingMoreImages,
} from "../redux/allImages";

function App() {
  const loadin = useSelector(isLoading);
  const isListImage = useSelector(listImages);
  const searchText = useSelector(isSearchText);
  const modal = useSelector(isModal);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadingMoreImages(searchText));
  };
  return (
    <div className="App">
      <FormSearch />
      {loadin ? (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      ) : (
        <ListImages />
      )}

      {isListImage.length > 0 && (
        <button className="loadMore" onClick={handleLoadMore}>
          Загрузить еще
        </button>
      )}

      {modal && <Modal />}
    </div>
  );
}

export default App;
