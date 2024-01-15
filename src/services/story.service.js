//story.service.js

import { storageService } from "./async-storage.service.js";

export const STORAGE_KEY = "stories";

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
function createSrories() {
  const stories = [
    {
      _id: "s1",
      txt: "Story 1: Best trip ever",
      imgUrl:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
      by: {
        _id: "u101",
        fullname: "Ulash Ulashi",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 11.11,
        lng: 22.22,
        name: "Tel Aviv",
      },
      comments: [
        {
          id: "c1001",
          by: {
            _id: "u105",
            fullname: "Bob",
            imgUrl:
              "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
          },
          txt: "good one!",
          likedBy: [
            {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "http://some-img",
            },
          ],
        },
        {
          id: "c1002",
          by: {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img",
          },
          txt: "not good!",
        },
      ],
      likedBy: [
        {
          _id: "u105",
          fullname: "Bob",
          imgUrl:
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",
        },
        {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
      ],
      tags: ["fun", "romantic"],
    },
    {
      _id: "s2",
      txt: "Story 2: Another adventure",
      imgUrl:
        "https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbGUlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
      by: {
        _id: "u102",
        fullname: "Alice Adventures",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 12.12,
        lng: 23.23,
        name: "New York",
      },
      comments: [
        {
          id: "c1003",
          by: {
            _id: "u107",
            fullname: "Eve",
            imgUrl: "http://some-img",
          },
          txt: "Amazing!",
          likedBy: [
            {
              _id: "u107",
              fullname: "Eve",
              imgUrl: "http://some-img",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u107",
          fullname: "Eve",
          imgUrl: "http://some-img",
        },
      ],
      tags: ["adventure", "exciting"],
    },
    {
      _id: "s3",
      txt: "Story 3: Exploring nature",
      imgUrl:
        "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww",
      by: {
        _id: "u103",
        fullname: "Nature Lover",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 33.33,
        lng: 44.44,
        name: "Forest",
      },
      comments: [],
      likedBy: [],
      tags: ["nature", "outdoors"],
    },
    {
      _id: "s4",
      txt: "Story 4: A day at the beach",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dNOsxa2tOLB2wU_1hL6sjO47cJuWwZBdjg&usqp=CAU",
      by: {
        _id: "u104",
        fullname: "Beach Babe",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 55.55,
        lng: 66.66,
        name: "Beach",
      },
      comments: [],
      likedBy: [],
      tags: ["beach", "relaxation"],
    },
    {
      _id: "s5",
      txt: "Story 5: Road trip memories",
      imgUrl:
        "https://www.happybrainscience.com/wp-content/uploads/2017/07/derwent-morning-Cropped.jpg",
      by: {
        _id: "u105",
        fullname: "Wanderer",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 77.77,
        lng: 88.88,
        name: "Various Locations",
      },
      comments: [
        {
          id: "c1004",
          by: {
            _id: "u108",
            fullname: "Traveler",
            imgUrl: "http://some-img",
          },
          txt: "Great journey!",
          likedBy: [
            {
              _id: "u108",
              fullname: "Traveler",
              imgUrl: "http://some-img",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u108",
          fullname: "Traveler",
          imgUrl: "http://some-img",
        },
      ],
      tags: ["travel", "adventure"],
    },
    {
      _id: "s6",
      txt: "Story 6: Culinary delights",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrx7hDogEKzo_LVThxSkO7amO2VNVXC5aMQ&usqp=CAU",
      by: {
        _id: "u106",
        fullname: "Foodie",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 99.99,
        lng: 101.101,
        name: "Restaurant",
      },
      comments: [],
      likedBy: [],
      tags: ["food", "delicious"],
    },
    {
      _id: "s7",
      txt: "Story 7: Wildlife encounter",
      imgUrl:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/australia/Morning-Mangroves-at-Port-Douglas-QLD_Alan-Barker.jpg?crop=1080%2C0%2C2161%2C2882&wid=675&hei=900&scl=3.2022222222222223",
      by: {
        _id: "u107",
        fullname: "Wildlife Enthusiast",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 121.121,
        lng: 131.131,
        name: "Safari",
      },
      comments: [],
      likedBy: [],
      tags: ["wildlife", "nature"],
    },
    {
      _id: "s8",
      txt: "Story 8: Winter wonderland",
      imgUrl: "https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg",
      by: {
        _id: "u108",
        fullname: "Snow Lover",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 151.151,
        lng: 161.161,
        name: "Snowy Mountains",
      },
      comments: [
        {
          id: "c1005",
          by: {
            _id: "u109",
            fullname: "Frosty",
            imgUrl: "http://some-img",
          },
          txt: "I love snow!",
          likedBy: [
            {
              _id: "u109",
              fullname: "Frosty",
              imgUrl: "http://some-img",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u109",
          fullname: "Frosty",
          imgUrl: "http://some-img",
        },
      ],
      tags: ["winter", "snow"],
    },
    {
      _id: "s9",
      txt: "Story 9: Artistic creations",
      imgUrl:
        "https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjMyNjM0ODMxOTk3/nature-quotes.jpg",
      by: {
        _id: "u109",
        fullname: "Artistic Soul",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 171.171,
        lng: 181.181,
        name: "Art Gallery",
      },
      comments: [],
      likedBy: [],
      tags: ["art", "creativity"],
    },
    {
      _id: "s10",
      txt: "Story 10: Night under the stars",
      imgUrl:
        "https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu",
      by: {
        _id: "u110",
        fullname: "Stargazer",
        imgUrl: "http://some-img",
      },
      loc: {
        lat: 191.191,
        lng: 201.201,
        name: "Starry Sky",
      },
      comments: [],
      likedBy: [],
      tags: ["stars", "astronomy"],
    },
  ];

  storageService.save(STORAGE_KEY, stories);
}

async function getAllStories() {
  return await storageService.query(STORAGE_KEY);
}

export const story = {
  _id: "s101",
  txt: "Best trip ever",
  imgUrl: "http://some-img",
  by: {
    _id: "u101",
    fullname: "Ulash Ulashi",
    imgUrl: "http://some-img",
  },
  loc: {
    lat: 11.11,
    lng: 22.22,
    name: "Tel Aviv",
  },
  comments: [
    {
      id: "c1001",
      by: {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      txt: "good one!",
      likedBy: [
        {
          _id: "u105",
          fullname: "Bob",
          imgUrl: "http://some-img",
        },
      ],
    },
    {
      id: "c1002",
      by: {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      txt: "not good!",
    },
  ],
  likedBy: [
    {
      _id: "u105",
      fullname: "Bob",
      imgUrl: "http://some-img",
    },
    {
      _id: "u106",
      fullname: "Dob",
      imgUrl: "http://some-img",
    },
  ],
  tags: ["fun", "romantic"],
};

function getById(storyId) {
  return storageService.get(STORAGE_KEY, storyId);
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

export const storyService = {
  createSrories,
  getAllStories,
  newStory,
  getById,
  updateStory,
  removeStory,
};
