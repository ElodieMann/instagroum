export default {
  setStory: (state, action) => {
    state.stories = action.payload;
  },
  setLike: (state, action) => {
    state.stories = state.stories.map((st) => {
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
    state.stories = state.stories.map((st) => {
      if (st._id === action.payload.id) {
        return { ...st, comments: [...st.comments, action.payload.comment] };
      }
      return st;
    });
  },
  addStory: (state, action) => {
    state.stories = [action.payload, ...state.stories];
  },
  setFav: (state, action) => {
    state.stories = state.stories.map((st) => {
      if (st._id === action.payload.id) {
        return { ...st, isFavorite: !action.payload.isFavorite };
      }
      return st;
    });
  },
};
