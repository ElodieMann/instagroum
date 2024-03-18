export const initialState = {
  user: {
    
  },

  userList: [
    {
      _id: "u191",
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
    },
  ],
};
