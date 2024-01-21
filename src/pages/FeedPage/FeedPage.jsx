import React, { useEffect } from "react";
import { storyService } from "../../services/story.service.js";
import StoryList from "../../components/StoryList/StoryList.jsx";
import { useDispatch } from "react-redux";
import { setStory } from "../../redux/story/index.js";
import PostModal from "../../components/PostModal /PostModal.jsx";

const FeedPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const stories = await storyService.getAllStories();
    dispatch(setStory(stories));
  };

  return (
    <>
      <StoryList />
      <PostModal />
    </>
  );
};

export default FeedPage;
