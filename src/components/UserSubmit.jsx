import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Loading from './Loading';

const Registration = () => {
  const [data, setData] = useState('');

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setData(e.target.value)
  };

  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault();
  };

  return (
    <div className="home border-0 rounded-0">
      <div className="card-home">
        <h5 className="card-title">User name</h5>
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
          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
};

export default Registration;
