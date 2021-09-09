import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, listImages, isLargeImage } from "../../redux/allImages";
import { ReactComponent as CloseModal } from "../../pictures/close.svg";
import { ReactComponent as Forward } from "../../pictures/forward-icon.svg";
import { ReactComponent as Backwards } from "../../pictures/backwards-icon.svg";
import styles from "./Modal.module.scss";

const Modal = () => {
  const largeImage = useSelector(isLargeImage);
  const isListImages = useSelector(listImages);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keydown", handelKeydown);
    return () => window.removeEventListener("keydown", handelKeydown);
  });

  const handelKeydown = (e) => {
    if (e.code === "Escape") {
      dispatch(actions.toggleModal());
    }

    if (e.code === "ArrowRight") {
      handleClickRight();
    }

    if (e.code === "ArrowLeft") {
      handleClickLeft();
    }
  };

  const handleViewGallery = (index) => {
    const nextImage = {
      link: isListImages[index].largeImageURL,
      alt: isListImages[index].tags,
      index: index,
    };
    dispatch(actions.setLargeImage(nextImage));
  };

  const handleClickRight = () => {
    const indexImage = largeImage.index;
    const nextIndexImage =
      indexImage === isListImages.length - 1 ? 0 : indexImage + 1;
    handleViewGallery(nextIndexImage);
  };
  const handleClickLeft = () => {
    const indexImage = largeImage.index;
    const nextIndexImage =
      indexImage === 0 ? isListImages.length - 1 : indexImage - 1;
    handleViewGallery(nextIndexImage);
  };

  const handleCloseModal = () => {
    dispatch(actions.toggleModal());
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.boxImage}>
        <button className={styles.btnModal} onClick={handleClickLeft}>
          <Backwards className={styles.iconNextImage} />
        </button>
        <img
          className={styles.image}
          src={largeImage.link}
          alt={largeImage.alt}
        />
        <button className={styles.btnModal} onClick={handleClickRight}>
          <Forward className={styles.iconNextImage} />
        </button>
        <button className={styles.btnCloseModal} onClick={handleCloseModal}>
          <CloseModal className={styles.iconCloseModal} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
