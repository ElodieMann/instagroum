import React, { useState } from "react";

import PostModal from "../PostModal /PostModal.jsx";
import ReactionsStory from "../ReactionsStory/ReactionsStory.jsx";
import CommentStory from "../CommentStory/CommentStory.jsx";

import styles from "./FooterStory.module.scss";

const FooterStory = ({ story, setChange }) => {
  const likeCount = story?.likedBy?.length;
  const commentCount = story?.comments?.length;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <ReactionsStory
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        story={story}
        setChange={setChange}
      />

      {likeCount > 0 && (
        <div className={styles.likeSection}>
          <img src={story?.likedBy[0]?.imgUrl} alt="" />
          <p>
            Liked by <span>{story?.likedBy[0]?.fullname}</span>
            {likeCount > 1 && (
              <>
                {" "}
                and{" "}
                <span>
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
            <p className={styles.allComents}>
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

      <CommentStory story={story} setChange={setChange} />

      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <PostModal setIsModalOpen={setIsModalOpen} setChange={setChange}  isModalOpen={isModalOpen} story={story} />
      </div>
    </footer>
  );
};

export default FooterStory;
