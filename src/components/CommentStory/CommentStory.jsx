import React, { useState } from "react";
import { storyService } from "../../services/story.service.js";
import { utilService } from "../../services/util.service.js";
import { setComment } from "../../redux/stories/index.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CommentStory.module.scss";

const CommentStory = ({ story }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

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
        likedBy: [],
      };

      await storyService.addComment(story._id, newComment);
      dispatch(setComment({ id: story._id, comment: newComment }));

      setCommentText("");
    }
  };
  return (
    <div className={styles.addCommentSection}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={commentText}
        onChange={handleCommentChange}
        onKeyDown={handleAddComment}
      />
    </div>
  );
};

export default CommentStory;
