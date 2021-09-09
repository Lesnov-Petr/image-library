import { useSelector } from "react-redux";
import { listImages } from "../../redux/allImages";
import ItemImage from "../ItemImage";
import styles from "./ListImages.module.scss";

const ListImages = () => {
  const isListImages = useSelector(listImages);
  console.log(isListImages);
  return (
    <ul className={styles.listImages}>
      {isListImages.map((image, idx) => (
        <ItemImage key={image.id} image={image} index={idx} />
      ))}
    </ul>
  );
};

export default ListImages;
