import React from "react";
import styles from "./PostModal.module.scss";
import { user, storyService } from "../../services/story.service.js";
import FooterStory from "../FooterStory/FooterStory.jsx";

const PostModal = ({ isModalOpen, onClose, story }) => {
  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        <img src={story.imgUrl} alt="Story" />
        <div className={styles.rightSide}>
          <div className={styles.user}>
            <img src={user.imgUrl} alt="Story" />
            <p>{user.username}</p>
          </div>
          <li>
            <img src={user.imgUrl} alt="Story" />

            <p>{user.username}</p>
            <p>{story.txt}</p>
          </li>
          <ul>
            {story.comments.map((comment) => (
              <li>
                <img src={comment.by.imgUrl} alt="Story" />

                <p>{comment.by.fullname}</p>
                <p>{comment.txt}</p>
              </li>
            ))}
          </ul>
        <FooterStory story={story} />
        </div>
      </div>
    </div>
  );
};

export default PostModal;