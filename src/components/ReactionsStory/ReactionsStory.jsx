import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { storyService } from "../../services/story.service.js";
import { useSelector } from "react-redux";
import { setLike, setFav } from "../../redux/stories/index.js";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/modalStory/index.js";
import styles from "./ReactionsStory.module.scss";

const ReactionsStory = ({ story }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isUserLike = story?.likedBy?.some((like) => like?._id === user?._id);

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
    dispatch(
      setOpenModal({
        open: true,
        storyOpen: story,
      })
    );
  };

  return (
    <div className={styles.reactions}>
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: isUserLike ? "red" : "inherit" }}
          onClick={handleLikeClick}
        />
        <FontAwesomeIcon icon={faComment} onClick={openModal} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <FontAwesomeIcon
        icon={faBookmark}
        onClick={handleFavClick}
        style={{ color: story.isFavorite ? "red" : "inherit" }}
      />
    </div>
  );
};

export default ReactionsStory;
