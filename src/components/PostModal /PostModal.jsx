import React from "react";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../redux/modalStory/index.js";
import styles from "./PostModal.module.scss";

const PostModal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { open, storyOpen } = useSelector(
    (state) => state.modalStory.isModalOpen
  );
  const likeCount = storyOpen?.likedBy?.length;

 
  const closeModal = () => {
    dispatch(
      setOpenModal({
        open: false,
        storyOpen: {},
      })
    );
  };

  return open ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={closeModal}>
          &times;
        </button>
        <img src={storyOpen?.imgUrl} alt="Story" />
        <div className={styles.rightSide}>
          <div className={styles.user}>
            <img src={user?.imgUrl} alt="Story" />
            <p>{user?.username}</p>
          </div>
          <li>
            <img src={user.imgUrl} alt="Story" />

            <p>{user?.username}</p>
            <p>{storyOpen?.txt}</p>
          </li>
          <ul>
            {storyOpen?.comments.map((comment, index) => (
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
                story={storyOpen}
              />
              <p>
                {likeCount} {likeCount > 1 ? "likes" : "like"}
              </p>
            </div>
            <CommentStory
              story={storyOpen}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PostModal;
