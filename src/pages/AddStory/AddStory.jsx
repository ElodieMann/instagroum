import React, { useState } from 'react';
import styles from './AddStory.module.scss';

const AddStory = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));  
    } else {
      setPreviewUrl(null);  
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Caption:', caption);
    console.log('Selected File:', selectedFile);
   
    setCaption('');
    setSelectedFile(null);
    setPreviewUrl(null);
    onClose();  
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>←</button>
          <h1 className={styles.modalTitle}>Create new post</h1>
          <button className={styles.shareButton} onClick={handleSubmit}>Share</button>
        </header>
        <main>
          <div className={styles.uploadSection}>
        
            {previewUrl ? <img src={previewUrl} alt="Preview" className={styles.imagePreview} /> :     <label className={styles.fileInputLabel}>
              Upload Image
              <input
                type="file"
                className={styles.fileInput}
                onChange={handleFileChange}
                accept="image/*,video/*"
              />
            </label>}
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
