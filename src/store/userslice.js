/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userInfoCallBegan } from './apiCall';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    list: {},
    error: '',
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
      user.error = action.payload;
    },

  },
});

export const {
  userReceived,
  userRequested,
  userRequestFailed,

} = userSlice.actions;

export default userSlice.reducer;

const url = 'https://bio.torre.co/api/bios/';

export const loaduser = (name) => userInfoCallBegan({
  url,
  name,
  onStart: userRequested.type,
  onSuccess: userReceived.type,
  onError: userRequestFailed.type,
});
