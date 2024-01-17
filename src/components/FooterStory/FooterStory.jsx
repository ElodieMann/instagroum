import React, { useState } from "react";

import { user, storyService } from "../../services/story.service.js";
import PostModal from "../PostModal /PostModal.jsx";

import styles from "./FooterStory.module.scss";
import { utilService } from "../../services/util.service.js";
import Reactions from "../ReactionsStory/ReactionsStory.jsx";

const FooterStory = ({ story }) => {
  const likeCount = story.likedBy.length;
  const commentCount = story.comments.length;

  const [commentText, setCommentText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = async (event) => {
    if (event.key === "Enter" && commentText.trim() !== "") {
      const newComment = {
        by: {
          fullname: user.fullname,
          imgUrl: user.imgUrl,
          _id: user._id,
        },
        id: utilService.makeId(),
        txt: commentText,
      };

      await storyService.addComment(story.by._id, newComment);

      setCommentText("");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <footer className={styles.footer}>

      <Reactions setIsModalOpen={setIsModalOpen} story={story}/>

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
        <span>{story.by.fullname}</span> {story.txt}
      </p>

      {commentCount > 0 && (
        <div className={styles.commentSection}>
          {commentCount > 2 && (
            <p className={styles.allComents}>
              View all {commentCount} comments
            </p>
          )}
          {story.comments.slice(0, 2).map((comment) => (
            <p key={comment.id}>
              <span>{comment.by.fullname}</span> {comment.txt}
            </p>
          ))}
        </div>
      )}

      <div className={styles.addCommentSection}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={handleCommentChange}
          onKeyDown={handleAddComment}
        />
      </div>

      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <PostModal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          story={story}
        />
      </div>
    </footer>
  );
};

export default FooterStory;
