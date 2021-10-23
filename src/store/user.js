/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userInfoCallBegan } from './apiCall';

export const champSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    list: {},
  },
  reducers: {
    userRequested: (user) => {
      user.loading = true;
    },
    userReceived: (user, action) => {
      user.list = action.payload;
      user.loading = false;
    },
    userRequestFailed: (user) => {
      user.loading = false;
    },

  },
});

export const {
  userReceived,
  userRequested,
  userRequestFailed,

} = userSlice.actions;

export default userSlice.reducer;

export const selectCategory = (state) => state.entities.champs.category;
export const selectChamp = (state) => state.entities.champs.selected;
export const selectTag = (state) => state.entities.champs.champTags;

const url = 'https://bio.torre.co/api/bios/';

export const loaduser = (name) => userInfoCallBegan({
  url,
  name,
  onStart: userRequested.type,
  onSuccess: userReceived.type,
  onError: userRequestFailed.type,
});
