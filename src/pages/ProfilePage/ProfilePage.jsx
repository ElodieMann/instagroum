import React from "react";
import { user, storyService } from "../../services/story.service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <header>
        <div>
          <img src={user.imgUrl} alt="Story" />
        </div>
        <div className={styles.rightHeader}>
          <p>{user.username}</p>
          <div className={styles.userInfo}>
            <p>posts</p>
            <p>followers</p>
            <p>following</p>
          </div>
        </div>
      </header>
      <section>
        <button>
          <FontAwesomeIcon icon={faTableCells} /> POSTS
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faBookmark} />
          SAVED
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} /> TAGGED
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
