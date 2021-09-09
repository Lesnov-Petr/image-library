import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadingImages, actions } from "../../redux/allImages";
import styles from "./FormSearch.module.scss";

const FormSearch = () => {
  const [searchText, setImage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.setSearchText(searchText));
    dispatch(loadingImages(searchText));
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleChangeImage}
        placeholder="Найти картинку"
      />
      <button className={styles.form__btn} type="submit">
        найти
      </button>
    </form>
  );
};

export default FormSearch;
