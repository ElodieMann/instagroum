import React from "react";
import styles from "./SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCommentDots,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { user } from "../../services/story.service.js";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <h1>Instagroum</h1>

      <Link to={"/"}>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </div>
      </Link>
      <Link to={"/search"}>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Search</p>
        </div>
      </Link>
      <Link to={"/messages"}>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faCommentDots} />
          <p>Messages</p>
        </div>
      </Link>
      <Link to={"/notifications"}>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faHeart} />
          <p>Notifications</p>
        </div>
      </Link>
      <Link to={"/createstory"}>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faPlus} />
          <p>Create</p>
        </div>
      </Link>
      <Link to={"/:username"}>
        <div className={styles.link}>
          <img src={user.imgUrl} alt="" />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
