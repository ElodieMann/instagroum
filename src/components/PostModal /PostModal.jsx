import React from "react";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";
import styles from "./PostModal.module.scss";

const PostModal = ({ display, story, closeModal }) => {
  const likeCount = story?.likedBy?.length;

  return display ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={closeModal}>
          &times;
        </button>
        <img className={styles.imgStory} src={story?.imgUrl} alt="Story" />
        <div className={styles.rightSide}>
          <div className={styles.user}>
            <img src={story?.by?.imgUrl} alt="Story" />
            <p>{story?.by?.fullname}</p>
          </div>
          <li>
            <img src={story?.by?.imgUrl} alt="Story" />

            <p>{story?.by?.fullname}</p>
            <p>{story?.txt}</p>
          </li>
          <ul>
            {story?.comments?.map((comment, index) => (
              <li key={index}>
                <img src={comment?.by?.imgUrl} alt="Story" />

                <p className={styles.username}>{comment?.by?.fullname}</p>
                <p>{comment?.txt}</p>
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <div>
              <ReactionsStory story={story} />
              <p>
                {likeCount} {likeCount > 1 ? "likes" : "like"}
              </p>
            </div>
            <CommentStory story={story} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PostModal;
