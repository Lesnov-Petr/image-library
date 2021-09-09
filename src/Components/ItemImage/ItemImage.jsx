import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/allImages";
import styles from "./ItemImage.module.scss";

const ItemImage = ({ image, index }) => {
  const [largeImage] = useState(image.largeImageURL);
  const [alt] = useState(image.tags);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const image = {
      link: largeImage,
      alt: alt,
      index: index,
    };
    dispatch(actions.setLargeImage(image));
    dispatch(actions.toggleModal());
  };
  return (
    <li className={styles.itemImage} onClick={handleClick}>
      <img
        className={styles.itemImage__picture}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

export default ItemImage;
