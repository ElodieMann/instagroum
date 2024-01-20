import React, { useEffect, useState } from "react";
import { storyService } from "../../services/story.service.js";
import StoryList from "../../components/StoryList/StoryList.jsx";


const FeedPage = () => {
  const [stories, setStories] = useState([]);

  const [change, setChange] = useState('')
  useEffect(() => {
    getData();
    
}, [change]);


const getData = async () => {
  let data = await storyService.getAllStories();
  
  data = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  setStories(data);
};

  return (
    <StoryList stories={stories} setChange={setChange}/>
  );
};

export default FeedPage;
