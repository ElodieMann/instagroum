import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const STORAGE_KEY = "users";

function emptyUser() {
  return {
    _id: utilService.makeId(),
    username: "",
    password: "",
    fullname: "",
    imgUrl: "",
    following: [],
    followers: [],
  };
}

async function getAllUsers() {
  let users = await storageService.query(STORAGE_KEY);
  return users || [];
}

async function verifyUser(username, password) {
  const users = await getAllUsers();
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return user || null;
}

async function addUser(newUser) {
  try {
    await storageService.post(STORAGE_KEY, newUser);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateUser(updatedUser) {
  try {
    const users = await getAllUsers();
    const index = users.findIndex((user) => user._id === updatedUser._id);
    if (index === -1) throw new Error("Utilisateur non trouvé");

    users[index] = updatedUser;
    await storageService.put(STORAGE_KEY, users);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const userService = {
  getAllUsers,
  emptyUser,
  verifyUser,
  addUser,
  updateUser,
};
