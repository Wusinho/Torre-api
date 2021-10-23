import { combineReducers } from 'redux';
import jobReducer from './jobslice';
import userReducer from './userslice';


export default combineReducers({
  job: jobReducer,
  user: userReducer,
});
