import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faTableCells,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfilePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../../components/PostModal /PostModal.jsx";
import { setOpenModal } from "../../redux/modalStory/index.js";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("POSTS");
  const user = useSelector((state) => state.user.user);
  const stories = useSelector((state) => state.story.story);
  const favorites = useSelector((state) => state.story.favorites);

  const userStories = stories.filter((story) => story?.by?._id === user._id);
  console.log(userStories);

  const openModal = (storyOpen) => {
    dispatch(
      setOpenModal({
        open: true,
        storyOpen,
      })
    );
  };

  return (
    <div className={styles.profilePage}>
      <header>
        <div>
          <img src={user?.imgUrl} alt="Story" />
        </div>
        <div className={styles.rightHeader}>
          <p>{user?.username}</p>
          <div className={styles.userInfo}>
            <p>posts</p>
            <p>followers</p>
            <p>following</p>
          </div>
        </div>
      </header>
      <section>
        <button onClick={() => setActiveTab("POSTS")}>
          <FontAwesomeIcon icon={faTableCells} /> POSTS
        </button>
        <button onClick={() => setActiveTab("SAVED")}>
          {" "}
          <FontAwesomeIcon icon={faBookmark} />
          SAVED
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} /> TAGGED
        </button>
      </section>

      <div className={styles.gridContainer}>
        {activeTab === "POSTS" &&
          userStories.map((story) => (
            <div
              key={story._id}
              className={styles.gridItem}
              onClick={() => openModal(story)}
            >
              <img src={story.imgUrl} alt={story.txt} />
              <div className={styles.overlayText}>
                <p>
                  {" "}
                  {story.likedBy.length} <FontAwesomeIcon icon={faHeart} />{" "}
                </p>
                <p>
                  {" "}
                  {story.comments.length} <FontAwesomeIcon icon={faComment} />
                </p>
              </div>
            </div>
          ))}

        {activeTab === "SAVED" &&
          favorites.map((story) => (
            <div key={story._id} className={styles.gridItem}>
              <img src={story.imgUrl} alt={story.txt} />
              <div className={styles.overlayText}>
                <p>
                  {" "}
                  {story.likedBy.length} <FontAwesomeIcon icon={faHeart} />{" "}
                </p>
                <p>
                  {" "}
                  {story.comments.length} <FontAwesomeIcon icon={faComment} />
                </p>
              </div>
            </div>
          ))}
      </div>
      <PostModal />
    </div>
  );
};

export default ProfilePage;
