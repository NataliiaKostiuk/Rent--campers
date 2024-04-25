import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 favourite: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
    initialState,
  
  reducers: {
    addToFavorites: (state, action) => {
      const { item } = action.payload;
      state.favourite.push(item )

    },
    removeFromFavorites: (state, action) => {
      const id = action.payload
      state.favourite = state.favourite.filter(item => item.id !== id)
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favouriteSlice.actions;


export const favouriteReduser = favouriteSlice.reducer;