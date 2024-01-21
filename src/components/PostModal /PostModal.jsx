import React, { useState } from "react";
import styles from "./PostModal.module.scss";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../redux/modalStory/index.js";

const PostModal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { open, storyOpen } = useSelector(
    (state) => state.modalStory.isModalOpen
  );

  const [shouldFocusCommentInput, setShouldFocusCommentInput] = useState(false);

  const [isCommentClick, setIsCommentClick] = useState(false);
  const likeCount = storyOpen?.likedBy?.length;

  const focusCommentInput = () => {
    setShouldFocusCommentInput(true);
  };
  const closeModal = () => {
    dispatch(
      setOpenModal({
        open: false,
        storyOpen: {},
      })
    );
  };

  return open ? (
    <div className={styles.modalOverlay} onClick={closeModal}>
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
                setIsCommentClick={setIsCommentClick}
              />
              <p>
                {likeCount} {likeCount > 1 ? "likes" : "like"}
              </p>
            </div>
            <CommentStory
              story={storyOpen}
              isCommentClick={isCommentClick}
              focusCommentInput={focusCommentInput}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PostModal;
