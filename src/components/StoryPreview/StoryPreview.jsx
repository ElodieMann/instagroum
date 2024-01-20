import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterStory from "../FooterStory/FooterStory.jsx";
import styles from "./StoryPreview.module.scss";

const StoryPreview = ({ story, setChange }) => {
  function formatTimestamp(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const timeDifference = now - past;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${hours}h`;
    } else {
      return `${days}d`;
    }
  }

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
            <div className={styles?.username}>
              <p>{story?.by?.fullname}</p>
              <div>
                <p>
                  <FontAwesomeIcon icon={faCircle} />
                </p>
                <p>{formatTimestamp(story?.createdAt)}</p>
              </div>
            </div>
            <span className={styles?.location}>{story?.loc?.name}</span>
          </div>
        </div>
      </header>
      <img className={styles.storyImage} src={story.imgUrl} alt="Story" />

      <FooterStory story={story} setChange={setChange} />
    </div>
  );
};

export default StoryPreview;
