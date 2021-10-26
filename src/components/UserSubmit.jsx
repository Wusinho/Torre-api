import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser } from '../store/userslice'
import { loadJobs } from '../store/jobslice';
import { Redirect } from 'react-router-dom';
import {
  selectIsLoggedIn,
  isloading,
  selectCurrentUser,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import Loading from './Loading';

const UserSubmit = () => {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const token = useSelector(selectCurrentUserToken);
  const loggedIn = useSelector(selectIsLoggedIn);
  const loadginStat = useSelector(isloading);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (loggedIn ) {
      dispatch(loaduser(token));
    }
  },[]);

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    setId(e.target.value)
  };

  const handleSubmit = (e) => {
    dispatch(loadJobs(id, token))
    e.preventDefault();
  };

  return (
    <div className="home border-0 rounded-0">
      <div className="card-home">
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="id">
              Post ID
              <input
                type="text"
                name="id"
                placeholder="id"
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>
          </div>
          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
};

export default UserSubmit;
