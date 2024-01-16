import React, { useEffect, useState } from "react";
import { storyService } from "../../services/story.service.js";
import StoryList from "../../components/StoryList/StoryList.jsx";


const FeedPage = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    getData();
    
}, []);

  const getData = async () => {
    const data = await storyService.getAllStories();
    setStories(data);
  };
  return (
    <StoryList stories={stories}/>
  );
};

export default FeedPage;
