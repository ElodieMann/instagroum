import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faComment,
  faPaperPlane,
  faBookmark as regularBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { storyService } from "../../services/story.service.js";
import { useSelector } from "react-redux";
import { setLike, setFav } from "../../redux/stories/index.js";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/modalStory/index.js";
import PostModal from "../../components/PostModal /PostModal.jsx";
import styles from "./ReactionsStory.module.scss";

const ReactionsStory = ({ story }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isUserLike = story?.likedBy?.some((like) => like?._id === user?._id);
  const [open, setOpen] = useState(false);

  const handleLikeClick = async () => {
    const userLike = {
      fullname: user.fullname,
      imgUrl: user.imgUrl,
      _id: user._id,
    };
    try {
      await storyService.toggleLike(user, story._id);
      dispatch(setLike({ id: story._id, user: userLike }));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleFavClick = async () => {
    try {
      await storyService.AddToFavorites(story?._id);
      dispatch(setFav({ id: story?._id, isFavorite: story?.isFavorite }));
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.reactions}>
        <div>
          <FontAwesomeIcon
            icon={isUserLike ? solidHeart : regularHeart}
            onClick={handleLikeClick}
            style={{
              color: isUserLike ? "red" : "inherit",
            }}
          />

          <FontAwesomeIcon icon={faComment} onClick={openModal} />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <FontAwesomeIcon
          icon={story?.isFavorite ? solidBookmark : regularBookmark}
          onClick={handleFavClick}
        />
      </div>
      <PostModal story={story} closeModal={closeModal} display={open} />
    </>
  );
};

export default ReactionsStory;
