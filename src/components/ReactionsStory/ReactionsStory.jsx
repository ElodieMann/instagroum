import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { storyService, user } from "../../services/story.service.js";
import styles from "./ReactionsStory.module.scss";

const ReactionsStory = ({ isModalOpen, setIsModalOpen, story, setChange }) => {
  const isUserLike = story?.likedBy?.some((like) => like._id === user._id);
  const [liked, setLiked] = useState(isUserLike);

  const handleLikeClick = async () => {
    try {
      await storyService.toggleLike(story._id);
      setLiked(!liked); 
      setChange(new Date())
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const openModal = () => {
    if (!isModalOpen) {  
      setIsModalOpen(true);
    }
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
