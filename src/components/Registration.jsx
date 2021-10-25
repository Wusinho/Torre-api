import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  register,
  selectIsLoggedIn,
  isloading,
} from '../store/sessionSlice';
import Loading from './Loading';

const Registration = () => {
  const [data, setData] = useState({
    username: '',
    name: '',
    lastname: '',
    password: '',
    password_confirmation: '',
  });

  const loggedIn = useSelector(selectIsLoggedIn);
  const loadginStat = useSelector(isloading);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (loggedIn) {
    return <Redirect to="/usersubmit" />;
  }

  const handleSubmit = (e) => {
    dispatch(register(data));
    e.preventDefault();
  };

  return (
    <div className="home border-0 rounded-0">
      <div className="card-home">
        <h5 className="card-title">Registration</h5>
        <form onSubmit={handleSubmit} className="login">
          <div className="mb-3">
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="lastname">
              Lastname
              <input
                type="text"
                name="lastname"
                placeholder="lastname"
                onChange={handleChange}
                className="form-control"
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password Confirmation
              <input
                className="form-control"
                type="password"
                name="password_confirmation"
                placeholder="Password confirmation"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          {/* { error && <h2>{error}</h2>} */}
          {
            loadginStat
              ? <Loading />
              : <button className="button" type="submit">Register</button>
          }
        </form>

      </div>
    </div>
  );
};

export default Registration;
