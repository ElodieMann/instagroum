import React, { useState } from "react";
import styles from "./PostModal.module.scss";
import { user, storyService } from "../../services/story.service.js";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";

const PostModal = ({ setIsModalOpen, isModalOpen, story, setChange }) => {
  const [shouldFocusCommentInput, setShouldFocusCommentInput] = useState(false);

  const [isCommentClick, setIsCommentClick] = useState(false);
  const likeCount = story?.likedBy?.length;

  if (!isModalOpen) return null;

  const focusCommentInput = () => {
    setShouldFocusCommentInput(true);
  };
  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }

  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={closeModal}>
          &times;
        </button>
        <img src={story?.imgUrl} alt="Story" />
        <div className={styles.rightSide}>
          <div className={styles.user}>
            <img src={user?.imgUrl} alt="Story" />
            <p>{user?.username}</p>
          </div>
          <li>
            <img src={user.imgUrl} alt="Story" />

            <p>{user?.username}</p>
            <p>{story.txt}</p>
          </li>
          <ul>
            {story.comments.map((comment, index) => (
              <li key={index}>
                <img src={comment?.by?.imgUrl} alt="Story" />

                <p className={styles.username}>{comment?.by?.fullname}</p>
                <p>{comment?.txt}</p>
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <div>
              <ReactionsStory
                story={story}
                setIsCommentClick={setIsCommentClick}
                setIsModalOpen={setIsModalOpen}
                setChange={setChange}
              />
              <p>
                {likeCount} {likeCount > 1 ? "likes" : "like"}
              </p>
            </div>
            <CommentStory
              story={story}
              isCommentClick={isCommentClick}
              isModalOpen={isModalOpen}
              focusCommentInput={focusCommentInput}
              setChange={setChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
