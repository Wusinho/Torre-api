import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import jobInfo from './middleware/jobInfo';
import userInfo from './middleware/userInfo';

const store = configureStore({
  reducer,
  middleware: [
    jobInfo,
    userInfo,
  ],
});

export default store;
