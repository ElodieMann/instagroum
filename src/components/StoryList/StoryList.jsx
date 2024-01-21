import React from "react";
import StoryPreview from "../StoryPreview/StoryPreview.jsx";
import { useSelector } from "react-redux";
import styles from './StoryList.module.scss'

const StoryList = () => {
const stories = useSelector((state) => state.stories.stories);
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
