//modalStory.reducer.js
export default {
    setOpenModal: (state, action) => {
        state.isModalOpen = action.payload;
      },
  };