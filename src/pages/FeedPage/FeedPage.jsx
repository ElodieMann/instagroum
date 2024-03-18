import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStory } from "../../redux/stories/index.js";
import { userService } from "../../services/user.service.js";
import { utilService } from "../../services/util.service.js";
import { storyService } from "../../services/story.service.js";
import { setUser } from "../../redux/user/index.js";
import StoryList from "../../components/StoryList/StoryList.jsx";
import LoginSignup from "../../components/LoginSignUp/LoginSignUp.jsx";

const FeedPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    getData();
  }, []);

  const handleLogin = async (params) => {
    const { username, password } = params;
    try {
      const loggedInUser = await userService.verifyUser(username, password);
      if (loggedInUser) {
        dispatch(setUser(loggedInUser));
      } else {
        console.log("Login failed: Incorrect username or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  handleLogin();

  const handleSignup = async (userFormData) => {
    try {
      let newUser = userService.emptyUser();

      newUser = {
        ...newUser,
        username: userFormData.username,
        password: userFormData.password,
        fullname: userFormData.fullname,
        _id: utilService.makeId(),
      };
      await userService.addUser(newUser);
      dispatch(setUser(newUser));  
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    const stories = await storyService.getAllStories();

    dispatch(setStory(stories));
  };


  return user._id ? (
    <StoryList />
  ) : (
    <LoginSignup handleLogin={handleLogin} handleSignup={handleSignup} />
  );
};

export default FeedPage;
