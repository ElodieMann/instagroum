import React, { useState } from "react";
import { user, storyService } from "../../services/story.service.js";

import { utilService } from "../../services/util.service.js";
import styles from "./CommentStory.module.scss";


const CommentStory = ({story, setChange}) => {
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
            likedBy: []
          };
    
          await storyService.addComment(story._id, newComment);
    
          setCommentText("");
          setChange(new Date())
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
