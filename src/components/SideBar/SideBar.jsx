import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCommentDots,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.scss";

const SideBar = ({ onShowPostUpload }) => {
  const user = useSelector((state) => state.user.user);


  return user._id ? (
    <div className={styles.sideBarContainer}>
      <div>
        <h1>Instagroum</h1>
        <h2>
          <FontAwesomeIcon icon={faInstagram} />
        </h2>
      </div>

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
      <div className={styles.link} onClick={onShowPostUpload}>
        <FontAwesomeIcon icon={faPlus} />
        <p>Create</p>
      </div>
      <Link to={"/profile"}>
        <div className={styles.link}>
          <img src={user.imgUrl} alt="" />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  ) : null
};

export default SideBar;
