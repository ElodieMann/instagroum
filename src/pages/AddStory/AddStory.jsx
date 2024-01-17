import React, { useState } from "react";
import styles from "./AddStory.module.scss";
import { storyService, user as userService } from "../../services/story.service.js";

const AddStory = ({ onClose }) => {
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageUrl(URL.createObjectURL(file));  
    } else {
      setImageUrl(null);  
    }
  };
  

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption || !selectedFile) {
      alert("Please add both a caption and an image.");
      return;
    }
  
    const imageBase64 = await blobToBase64(selectedFile);
  
    const newStory = {
      ...storyService.getEmptyStory(),
      txt: caption,
      imgUrl: imageBase64,  
      by: userService,
    };
  
    try {
      await storyService.newStory(newStory);
      alert("Story added successfully!");
  
      setCaption("");
      setSelectedFile(null);
      onClose();
    } catch (error) {
      console.error("Error adding new story:", error);
      alert("Failed to add the story.");
    }
  };
  
  

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            ←
          </button>
          <h1 className={styles.modalTitle}>Create new post</h1>
          <button className={styles.shareButton} onClick={handleSubmit}>
            Share
          </button>
        </header>
        <main>
          <div className={styles.uploadSection}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Preview"
                className={styles.imagePreview}
              />
            ) : (
              <label className={styles.fileInputLabel}>
                Upload Image
                <input
                  type="file"
                  className={styles.fileInput}
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                />
              </label>
            )}
          </div>
          <div className={styles.modalContent}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}></div>
              <div className={styles.username}>Elo</div>
            </div>
            <textarea
              className={styles.captionInput}
              placeholder="Write a caption..."
              value={caption}
              onChange={handleCaptionChange}
              maxLength="2200"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddStory;
