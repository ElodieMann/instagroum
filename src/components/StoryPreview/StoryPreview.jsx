import React from "react";

import styles from "./StoryPreview.module.scss";
import FooterStory from "../FooterStory/FooterStory.jsx";

const StoryPreview = ({ story, setChange }) => {
  return (
    <div className={styles?.storyPreview}>
      <header className={styles?.header}>
        <div className={styles?.userInfo}>
          <img
            className={styles.userAvatar}
            src={story?.by?.imgUrl}
            alt={`${story?.by?.fullname}'s avatar`}
          />
          <div className={styles?.userDetails}>
            <p className={styles?.username}>{story?.by?.fullname}</p>
            <span className={styles?.location}>{story?.loc?.name}</span>
          </div>
        </div>
      </header>
      <img className={styles.storyImage} src={story.imgUrl} alt="Story" />
  

     <FooterStory story={story} setChange={setChange}/>
    </div>
  );
};

export default StoryPreview;
