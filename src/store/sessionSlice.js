/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  regCallBegan,
  sessionCallBegan,
} from './api';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false,
    loading: false,
    token: '',
    error: '',
  },
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    regRequested: (api) => {
      api.loading = true;
    },
    regReceived: (api, action) => {
      api.user = action.payload.user;
      api.token = action.payload.token;
      api.error = action.payload.error;
      api.isLoggedIn = action.payload.status;
      api.loading = false;
    },
    regRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
    sessionRequested: (api) => {
      api.loading = true;
    },
    sessionReceived: (api, action) => {
      api.user = action.payload.user;
      api.token = action.payload.token;
      api.isLoggedIn = action.payload.status;
      api.error = action.payload.error;
      api.loading = false;
    },
    sessionRequestFailed: (api, action) => {
      api.loading = false;
      api.error = action.payload;
    },
  },
});

export const selectCurrentUser = (state) => state.entities.session.user;
export const selectCurrentUserToken = (state) => state.entities.session.token;
export const selectIsLoggedIn = (state) => state.entities.session.isLoggedIn;
export const ifError = (state) => state.entities.session.error;
export const selectCoachList = (state) => state.entities.session.coachList;
export const isloading = (state) => state.entities.session.loading;
export const selectAppointments = (state) => state.entities.session.usersAppointments;
export const {
  logOut,
  regRequested,
  regReceived,
  regRequestFailed,
  sessionReceived,
  sessionRequestFailed,
  sessionRequested,
} = sessionSlice.actions;
export default sessionSlice.reducer;

const url = 'https://enigmatic-sierra-93966.herokuapp.com/';
// const url = 'http://localhost:3000/';

export const register = (data) => regCallBegan({
  url,
  data,
  onStart: regRequested.type,
  onSuccess: regReceived.type,
  onError: regRequestFailed.type,
});

export const signIn = (data) => sessionCallBegan({
  url,
  data,
  onStart: sessionRequested.type,
  onSuccess: sessionReceived.type,
  onError: sessionRequestFailed.type,
});
