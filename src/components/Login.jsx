import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import '../style/Login.scss'

const Login = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(signIn(data));
    e.preventDefault();
  };

  if (loggedIn) {
    return <Redirect to="/champs" />;
  }

  return (
    <div className="home border-0 rounded-0">
      <div className="card-home">
        <h5 className="card-title">Sing In</h5>
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
          { error && <h2>{error}</h2>}
          {
            loadginStat
              ? <Loading />
              : <button className="button" type="submit">Log In</button>
          }
        </form>
        <Link to="/registration">
          <li>Registration</li>
        </Link>
      </div>
    </div>

  );
};

export default Login;