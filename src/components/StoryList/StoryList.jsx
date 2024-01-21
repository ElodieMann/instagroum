import React from "react";
import styles from './StoryList.module.scss'
import StoryPreview from "../StoryPreview/StoryPreview.jsx";
import { useSelector } from "react-redux";

const StoryList = () => {
const stories = useSelector((state) => state.story.story);
  return (
    <div className={styles.storyListContainer}>
      {stories?.length > 0 ? (
        stories.map((story) => (
          <StoryPreview key={story._id} story={story} />
        ))
      ) : (
        <p>No story</p>
      )}
    </div>
  );
};

export default StoryList;
