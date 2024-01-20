import React from "react";
import styles from './StoryList.module.scss'
import StoryPreview from "../StoryPreview/StoryPreview.jsx";

const StoryList = ({ stories, setChange }) => {
  return (
    <div className={styles.storyListContainer}>
      {stories && stories.length > 0 ? (
        stories.map((story) => (
          <StoryPreview key={story._id} story={story} setChange={setChange}/>
        ))
      ) : (
        <p>No story</p>
      )}
    </div>
  );
};

export default StoryList;
