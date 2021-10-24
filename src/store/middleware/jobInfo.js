import axios from 'axios';
import * as actions from '../apiCall';

// eslint-disable-next-line consistent-return
const jobInfo = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {url, id, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  axios
    .get(
      `${url}${id}`,
      { mode: 'cors' })
    .then((response) => {
      dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default jobInfo;
