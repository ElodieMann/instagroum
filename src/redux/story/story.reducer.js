export default {
  setStory: (state, action) => {
    state.story = action.payload;
  },
  setLike: (state, action) => {
    state.story = state.story.map((st) => {
      if (st._id === action.payload.id) {
        const likedBy = [...st.likedBy];
        const userIndex = likedBy.findIndex(
          (likedUser) => likedUser._id === action.payload.user._id
        );

        if (userIndex === -1) {
          likedBy.push(action.payload.user);
        } else {
          likedBy.splice(userIndex, 1);
        }

        return { ...st, likedBy };
      }
      return st;
    });
  },
  setComment: (state, action) => {
    state.story = state.story.map((st) => {
      if (st._id === action.payload.id) {
        return { ...st, comments: [...st.comments, action.payload.comment] };
      }
      return st;
    });
  },
  addStory: (state, action) => {
    state.story = [action.payload, ...state.story];
  },
  addToFavorites: (state, action) => {
    const storyToAdd = action.payload; 
  
    const index = state.favorites.findIndex(fav => fav._id === storyToAdd._id);
  
    if (index !== -1) {
      state.favorites = state.favorites.filter(fav => fav._id !== storyToAdd._id);
    } else {
      state.favorites = [...state.favorites, storyToAdd];
    }
  }
  
};
