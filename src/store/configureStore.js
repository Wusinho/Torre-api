import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import jobInfo from './middleware/jobInfo';
import userInfo from './middleware/userInfo';
import login from './middleware/login';
import registration from './middleware/registration';

const store = configureStore({
  reducer,
  middleware: [
    jobInfo,
    userInfo,
    login,
    registration
  ],
});

export default store;
