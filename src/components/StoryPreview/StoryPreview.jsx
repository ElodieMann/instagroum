import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { user, storyService } from "../../services/story.service.js";

import styles from "./StoryPreview.module.scss";
import PostModal from "../PostModal /PostModal.jsx";
import FooterStory from "../FooterStory/FooterStory.jsx";

const StoryPreview = ({ story }) => {


  return (
    <div className={styles.storyPreview}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <img
            className={styles.userAvatar}
            src={story?.by?.imgUrl}
            alt={`${story.by.fullname}'s avatar`}
          />
          <div className={styles.userDetails}>
            <p className={styles.username}>{story.by.fullname}</p>
            <span className={styles.location}>{story.loc.name}</span>
          </div>
        </div>
      </header>
      <img className={styles.storyImage} src={story.imgUrl} alt="Story" />
  

     <FooterStory story={story}/>
    </div>
  );
};

export default StoryPreview;
