import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import styles from "./StoryProfilePage.module.scss";
import PostModal from "../PostModal /PostModal";

const StoryProfilePage = ({ story }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div key={story._id} className={styles.gridItem} onClick={openModal}>
        <img src={story.imgUrl} alt={story.txt} />
        <div className={styles.overlayText}>
          <p>
            {story.likedBy.length} <FontAwesomeIcon icon={faHeart} />
          </p>
          <p>
            {story.comments.length} <FontAwesomeIcon icon={faComment} />
          </p>
        </div>
      </div>
      <PostModal story={story} closeModal={closeModal} display={open} />
    </>
  );
};

export default StoryProfilePage;
