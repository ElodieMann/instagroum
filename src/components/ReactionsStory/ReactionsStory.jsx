import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { storyService } from "../../services/story.service.js";

import styles from "./ReactionsStory.module.scss";

const ReactionsStory = ({ setIsModalOpen, story }) => {
  const [liked, setLiked] = useState(false);
 
  useEffect(() => {
    const likedInLocalStorage = localStorage.getItem(`liked_${story.by._id}`);
    if (likedInLocalStorage === "true") {
      setLiked(true);
    }
  }, [story.by._id]);

  const handleLikeClick = async () => {
    setLiked(!liked);

    localStorage.setItem(`liked_${story.by._id}`, !liked);

    await storyService.toggleLike(story.by._id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.reactions}>
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: liked ? "red" : "inherit" }}
          onClick={handleLikeClick}
        />

        <FontAwesomeIcon icon={faComment} onClick={openModal} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  );
};

export default ReactionsStory;
