import React from 'react';
import { user, storyService } from "../../services/story.service.js";
import styles from './UserProfile.module.scss'

const UserProfile = () => {
    return (
        <div>
            <header>
            <img src={user.imgUrl} alt="Story" />
            <div className={styles.rightHeader}>
            <p>{user.username}</p>
            <div className={styles.userInfo}>

            </div>
            <div>

            </div>
            </div>
            </header>
        </div>
    );
};

export default UserProfile;