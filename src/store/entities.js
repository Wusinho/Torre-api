import { combineReducers } from 'redux';
import jobReducer from './job';
import userReducer from './user';


export default combineReducers({
  job: jobReducer,
  user: userReducer,
});
