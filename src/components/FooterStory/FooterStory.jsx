import React, { useState } from "react";

import PostModal from "../PostModal /PostModal.jsx";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";

import styles from "./FooterStory.module.scss";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/modalStory/index.js";

const FooterStory = ({ story }) => {
  const likeCount = story?.likedBy?.length;
  const commentCount = story?.comments?.length;

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(
      setOpenModal({
        open: true,
        storyOpen: story,
      })
    );
  };

  return (
    <>
      <footer className={styles.footer}>
        <ReactionsStory story={story} />

        {likeCount > 0 && (
          <div className={styles.likeSection}>
            <img src={story?.likedBy[0]?.imgUrl} alt="" />
            <p>
              Liked by <span>{story?.likedBy[0]?.fullname}</span>
              {likeCount > 1 && (
                <>
                  {" "}
                  and{" "}
                  <span onClick={openModal}>
                    {likeCount - 1} {likeCount - 1 === 1 ? "other" : "others"}
                  </span>
                </>
              )}
            </p>
          </div>
        )}
        <p className={styles.storyText}>
          <span>{story?.by?.fullname}</span> {story?.txt}
        </p>

        {commentCount > 0 && (
          <div className={styles.commentSection}>
            {commentCount > 2 && (
              <p className={styles.allComents} onClick={openModal}>
                View all {commentCount} comments
              </p>
            )}
            {story.comments.slice(0, 2).map((comment) => (
              <p key={comment?.id}>
                <span>{comment?.by?.fullname}</span> {comment?.txt}
              </p>
            ))}
          </div>
        )}

        <CommentStory story={story} />
      </footer>
    </>
  );
};

export default FooterStory;
