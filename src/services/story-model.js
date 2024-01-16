// story-model.js

export const predefinedStories = [
    {
      _id: "s1",
      txt: "Best trip ever",
      imgUrl:
        "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/b/4/db4a1846c7_50188977_homme-nature-sante.jpg",
      by: {
        _id: "u101",
        fullname: "Ulash Ulashi",
        imgUrl: "https://i.pinimg.com/236x/7e/71/c6/7e71c61368ce63d62f1baf047618853c.jpg",
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
              imgUrl: "https://img.freepik.com/vecteurs-premium/jeune-homme-avatar-caractere-vector-illustration-design_24877-18517.jpg",
            },
          ],
        },
        {
          id: "c1002",
          by: {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
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
          imgUrl: "https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png",
        },
      ],
      tags: ["fun", "romantic"],
    },
    {
      _id: "s2",
      txt: "Another adventure",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRaDBXoZpOUmX_WEl7HbFAcV8ZdeTGRMZXA&usqp=CAU",
      by: {
        _id: "u102",
        fullname: "Alice Adventures",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPm8mq1tN_GVayhZLsqZnpsIGcMLaz2bxyw&usqp=CAU",
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
            imgUrl: "https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png",
          },
          txt: "Amazing!",
          likedBy: [
            {
              _id: "u107",
              fullname: "Eve",
              imgUrl: "https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u107",
          fullname: "Eve",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPm8mq1tN_GVayhZLsqZnpsIGcMLaz2bxyw&usqp=CAU",
        },
      ],
      tags: ["adventure", "exciting"],
    },
    {
      _id: "s3",
      txt: "Exploring nature",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsz22YjnYKwtcwHF7nk3TYl42TbPctzAD6Q&usqp=CAU",
      by: {
        _id: "u103",
        fullname: "Nature Lover",
        imgUrl: "https://e7.pngegg.com/pngimages/670/509/png-clipart-avatar-female-girls-avatar-purple-face.png",
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
      txt: "A day at the beach",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dNOsxa2tOLB2wU_1hL6sjO47cJuWwZBdjg&usqp=CAU",
      by: {
        _id: "u104",
        fullname: "Beach Babe",
        imgUrl: "https://formationepgv.com/wp-content/uploads/2020/11/avatar-femme.png",
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
      txt: "Road trip memories",
      imgUrl:
        "https://www.happybrainscience.com/wp-content/uploads/2017/07/derwent-morning-Cropped.jpg",
      by: {
        _id: "u105",
        fullname: "Wanderer",
        imgUrl: "https://static.vecteezy.com/ti/vecteur-libre/p1/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg",
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
            imgUrl: "https://c8.alamy.com/compfr/2f1m1tm/avatar-visage-personnage-homme-dans-les-lunettes-2f1m1tm.jpg",
          },
          txt: "Great journey!",
          likedBy: [
            {
              _id: "u108",
              fullname: "Traveler",
              imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRA_xrwG5x60TEohnSZDqaCyU6JUQTlMxNA&usqp=CAU",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u108",
          fullname: "Traveler",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRA_xrwG5x60TEohnSZDqaCyU6JUQTlMxNA&usqp=CAU",
        },
      ],
      tags: ["travel", "adventure"],
    },
    {
      _id: "s6",
      txt: "Culinary delights",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrx7hDogEKzo_LVThxSkO7amO2VNVXC5aMQ&usqp=CAU",
      by: {
        _id: "u106",
        fullname: "Foodie",
        imgUrl: "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18321.png",
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
      txt: "Wildlife encounter",
      imgUrl:
        "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/australia/Morning-Mangroves-at-Port-Douglas-QLD_Alan-Barker.jpg?crop=1080%2C0%2C2161%2C2882&wid=675&hei=900&scl=3.2022222222222223",
      by: {
        _id: "u107",
        fullname: "Wildlife Enthusiast",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRA_xrwG5x60TEohnSZDqaCyU6JUQTlMxNA&usqp=CAU",
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
      txt: "Winter wonderland",
      imgUrl: "https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg",
      by: {
        _id: "u108",
        fullname: "Snow Lover",
        imgUrl: "https://static.vecteezy.com/ti/vecteur-libre/p1/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg",
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
            imgUrl: "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18321.png",
          },
          txt: "I love snow!",
          likedBy: [
            {
              _id: "u109",
              fullname: "Frosty",
              imgUrl: "https://cdn-icons-png.flaticon.com/512/2635/2635415.png",
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: "u109",
          fullname: "Frosty",
          imgUrl: "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18321.png",
        },
      ],
      tags: ["winter", "snow"],
    },
    {
      _id: "s9",
      txt: "Artistic creations",
      imgUrl:
        "https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjMyNjM0ODMxOTk3/nature-quotes.jpg",
      by: {
        _id: "u109",
        fullname: "Artistic Soul",
        imgUrl: "https://cdn-icons-png.flaticon.com/512/2635/2635415.png",
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
      txt: "Night under the stars",
      imgUrl:
        "https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu",
      by: {
        _id: "u110",
        fullname: "Stargazer",
        imgUrl: "https://formationepgv.com/wp-content/uploads/2020/11/avatar-femme.png",
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