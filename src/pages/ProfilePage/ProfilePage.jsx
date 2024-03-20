import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark, faTableCells } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfilePage.module.scss";
import StoryProfilePage from "../../components/StoryProfilePage/StoryProfilePage.jsx";
import { setStory } from "../../redux/stories/index.js";
import { storyService } from "../../services/story.service.js";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("POSTS");
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const stories = useSelector((state) => state.stories.stories);

  const userStories = stories.filter((story) => story?.by?._id === user._id);
  const favStories = stories.filter((story) => story.isFavorite);

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await storyService.getAllStories();
      dispatch(setStory(stories));
    };
    
    fetchStories();
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    if (localUser && localUser.imgUrl) {
      setProfilePic(localUser.imgUrl);
    }
  }, [dispatch]);

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleProfilePicChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newProfilePic = reader.result;
        const updatedUser = { ...user, imgUrl: newProfilePic };
 
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  
        let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const userIndex = users.findIndex((u) => u._id === user._id);
        if (userIndex !== -1) {
          users[userIndex] = updatedUser;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        }
 
        setProfilePic(newProfilePic);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };
  


  return (
    <>
      <div className={styles.profilePage}>
        <header className={styles.profileHeader}>
          <div className={styles.profilePicContainer} onClick={handleProfilePicClick}>
            {profilePic ? (
              <img src={profilePic} alt="Profile" className={styles.profilePic} />
            ) : (
              <FontAwesomeIcon icon={faUser} size="6x" />
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
          </div>
          <div className={styles.rightHeader}>
            <p>{user?.username}</p>
            <div className={styles.userInfo}>
              <span>{userStories.length} posts</span>
              <span>{user?.followers?.length || 0} followers</span>
              <span>{user?.following?.length || 0} following</span>
            </div>
          </div>
        </header>
        <section className={styles.tabSection}>
          <button onClick={() => setActiveTab("POSTS")}>
            <FontAwesomeIcon icon={faTableCells} /> POSTS
          </button>
          <button onClick={() => setActiveTab("SAVED")}>
            <FontAwesomeIcon icon={faBookmark} /> SAVED
          </button>
          <button>
            <FontAwesomeIcon icon={faUser} /> TAGGED
          </button>
        </section>
        <div className={styles.gridContainer}>
          {(activeTab === "POSTS" ? userStories : favStories).map(story => (
            <StoryProfilePage key={story._id} story={story} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
