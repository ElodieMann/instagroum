//story.service.js

import { storageService } from "./async-storage.service.js";
import { predefinedStories } from "./story-model.js";
import { utilService } from "./util.service.js";

export const STORAGE_KEY = "stories";

async function initStories() {
  try {
    const stories = await storageService.query(STORAGE_KEY);
    if (!stories || stories.length === 0) {
      utilService.saveToStorage(STORAGE_KEY, predefinedStories);
      return predefinedStories;
    }
    return predefinedStories;
  } catch (e) {
    console.log(e);
  }
}

export const user = {
  _id: "u101",
  username: "Elo",
  password: "Elo",
  fullname: "Elo Elo",
  imgUrl:
    "https://img.freepik.com/vecteurs-premium/profil-avatar-femme-icone-ronde_24640-14042.jpg",
  following: [
    {
      _id: "u106",
      fullname: "Dob",
      imgUrl: "http://some-img",
    },
  ],
  followers: [
    {
      _id: "u105",
      fullname: "Bob",
      imgUrl: "http://some-img",
    },
  ],
  savedStoryIds: ["s104", "s111", "s123"],
};

async function getAllStories() {
  initStories();
  return await storageService.query(STORAGE_KEY);
}


async function getById(storyId) {
  try {
    const story = await storageService.get(STORAGE_KEY, storyId);
    if (!story) throw new Error("Story not found");
    return story;
  } catch (error) {
    console.error("Error getting story by ID:", error);
    throw error;
  }
}

function newStory(story) {
  return storageService.post(STORAGE_KEY, story);
}

function updateStory(updateStory) {
  return storageService.put(STORAGE_KEY, updateStory);
}
function removeStory(storyId) {
  return storageService.remove(STORAGE_KEY, storyId);
}

async function addComment(storyId, newComment) {
  try {
    const story = await getById(storyId);
    console.log(story);
    if (!story) throw new Error("Story not found");

    const comment = {
      id: utilService.makeId(),
      by: newComment.by,
      txt: newComment.txt,
      likedBy: [],
    };

    story.comments.push(comment);

    await updateStory(story);

    return story;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
}

async function toggleLike(storyId) {
  try {

    const userId = {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    };

    const story = await getById(storyId);
    if (!story) throw new Error("Story not found");

    if (!story.likedBy) {
      story.likedBy = [];
    }

    const userIndex = story.likedBy.findIndex(
      (likedUser) => likedUser._id === userId._id
    );

    if (userIndex === -1) {
      story.likedBy.push(userId);
    } else {
      story.likedBy.splice(userIndex, 1);
    }

    await updateStory(story);

    return story;
  } catch (error) {
    console.error("Error toggling like:", error);
    throw error;
  }
}

function getEmptyStory() {
  
  return {
    _id: utilService.makeId(),
    txt: "",
    by: {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    },
    comments: [],
    imgUrl: "",
    likedBy: [],
    tags: [],
  };
}




export const storyService = {
  getAllStories,
  newStory,
  getById,
  updateStory,
  removeStory,
  addComment,
  toggleLike,
  getEmptyStory,
};
