import { combineReducers } from 'redux';
import jobReducer from './jobslice';
import userReducer from './userslice';
import sessionReducer from './sessionSlice';


export default combineReducers({
  job: jobReducer,
  user: userReducer,
  session: sessionReducer,
});
