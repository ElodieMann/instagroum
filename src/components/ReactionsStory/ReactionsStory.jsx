import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {  storyService } from "../../services/story.service.js";

import styles from './ReactionsStory.module.scss'

const Reactions = ({setIsModalOpen, story}) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = async () => {
  
        if (!liked) {
          await storyService.toggleLike(story.by._id);
        } else {
          await storyService.toggleLike(story.by._id);
        }
    
        setLiked(!liked);
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

export default Reactions;