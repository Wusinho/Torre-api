/* eslint-disable object-shorthand */
import axios from 'axios';
import * as actions from '../apiCall';

// eslint-disable-next-line consistent-return
const userAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.userInfoCallBegan.type) return next(action);

  const {
    url,name, token, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const formated_name = name.replace(/ /g,'').toLowerCase()

  const headers = {
    headers : 'Access-Control-Allow-Origin: *',
  };

  axios
    .get(
      `${url}${formated_name}`,
        headers,
      { mode: 'cors' },
    )
    .then((response) => {
      dispatch(actions.userInfoCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.userInfoCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default userAppointments;
