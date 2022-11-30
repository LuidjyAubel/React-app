import { createSlice } from '@reduxjs/toolkit'

export const favorites = createSlice({
  name: 'favorites',
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, id) => {
      state.value.push(id.payload);
      return state;
    },

    removeFavorite: (state, id) => {
      state.value.splice(state.value.indexOf(id.payload), 1);
      return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favorites.actions

export default favorites.reducer