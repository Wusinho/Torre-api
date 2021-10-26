/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiCall';

export const jobsSlice = createSlice({
  name: 'Jobs',
  initialState: {
    loading: false,
    list: {},
    error: ''
  },
  reducers: {
    jobsRequested: (jobs) => {
      jobs.loading = true;
    },
    jobsReceived: (jobs, action) => {
      jobs.list = action.payload;
      jobs.loading = false;
    },
    jobsRequestFailed: (jobs, action) => {
      jobs.error = action.payload;
      jobs.loading = false;
    },
  },
});

export const {
  jobsReceived,
  jobsRequested,
  jobsRequestFailed,

} = jobsSlice.actions;

export default jobsSlice.reducer;

// const url = 'https://torre.co/api/suite/opportunities/';
const url = 'http://localhost:3000/job';

export const loadJobs = (id,token) => apiCallBegan({
  url,
  id,
  token,
  onStart: jobsRequested.type,
  onSuccess: jobsReceived.type,
  onError: jobsRequestFailed.type,
});
