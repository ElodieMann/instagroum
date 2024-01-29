import React, { useState, useEffect } from "react";
import PostModal from "../../components/PostModal /PostModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { storyService } from "../../services/story.service.js";
import { useDispatch } from "react-redux";
import { setStory } from "../../redux/stories/index.js";
import styles from "./ProfilePage.module.scss";
import StoryProfilePage from "../../components/StoryProfilePage/StoryProfilePage.jsx";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("POSTS");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const stories = useSelector((state) => state.stories.stories);
  console.log("====================================");
  console.log(stories, "stories");
  console.log("====================================");
  const userStories = stories.filter((story) => story?.by?._id === user._id);
  console.log("====================================");
  console.log(userStories, "user Stories");
  console.log("====================================");
  const favStories = stories.filter((story) => story.isFavorite);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const stories = await storyService.getAllStories();
    dispatch(setStory(stories));
  };

  return (
    <>
      <div className={styles.profilePage}>
        <header>
          <div>
            <img src={user?.imgUrl} alt="User" />
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
            <FontAwesomeIcon icon={faBookmark} />
            SAVED
          </button>
          <button>
            <FontAwesomeIcon icon={faUser} /> TAGGED
          </button>
        </section>

        <div className={styles.gridContainer}>
          {(activeTab === "POSTS" ? userStories : favStories).map((story) => (
            <StoryProfilePage story={story} key={story._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
