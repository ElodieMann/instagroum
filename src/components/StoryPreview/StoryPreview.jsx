import React from "react";
import FooterStory from "../FooterStory/FooterStory.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { utilService } from "../../services/util.service.js";
import styles from "./StoryPreview.module.scss";

const StoryPreview = ({ story }) => {
  return (
    <div className={styles.storyPreview}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <img
            className={styles.userAvatar}
            src={story?.by?.imgUrl}
            alt={`${story?.by?.fullname}'s avatar`}
          />
          <div className={styles.userDetails}>
            <div className={styles.username}>
              <p>{story?.by?.fullname}</p>
              <div>
                <p>
                  <FontAwesomeIcon icon={faCircle} />
                </p>
                <p>{utilService.formatTimestamp(story?.createdAt)}</p>
              </div>
            </div>
            <span className={styles.location}>{story?.loc?.name}</span>
          </div>
        </div>
      </header>
      <img className={styles.storyImage} src={story.imgUrl} alt="Story" />

      <FooterStory story={story}   />
    </div>
  );
};

export default StoryPreview;
