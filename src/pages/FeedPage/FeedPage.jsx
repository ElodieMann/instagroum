import React, { useEffect } from "react";
import StoryList from "../../components/StoryList/StoryList.jsx";
import { storyService } from "../../services/story.service.js";
import { useDispatch } from "react-redux";
import { setStory } from "../../redux/stories/index.js";

const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const stories = await storyService.getAllStories();
    dispatch(setStory(stories));
  };

  return <StoryList />;
};

export default FeedPage;
