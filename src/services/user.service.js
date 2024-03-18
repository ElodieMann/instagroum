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
  const user = users.find(user => user.username === username && user.password === password);
  return user || null;
}

async function addUser(newUser) {
    try {
      await storageService.post(STORAGE_KEY, newUser); // Ajoute le nouvel utilisateur au localStorage
      console.log('Utilisateur ajouté avec succès:', newUser);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      throw error;
    }
  }
  

export const userService = {
  getAllUsers,
  emptyUser,
  verifyUser,
  addUser,
};
