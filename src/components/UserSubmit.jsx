import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { loaduser } from '../store/userslice'
import axios from 'axios';


import Loading from './Loading';

const UserSubmit = () => {
  const [data, setData] = useState('');
  const [info, setInfo] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData(e.target.value)
  };

  const handleSubmit = (e) => {
    dispatch(loaduser(data))
    e.preventDefault();
  };
  // const formated_name = data.replace(/ /g,'').toLowerCase()
  // const url = 'https://bio.torre.co/api/bios/';
  // const headers = {
  //   'Access-Control-Allow-Origin': '*',
  // };
  // const handleSubmit = (e) => {
  //   axios
  //   .get(
  //     `${url}${formated_name}`, 
  //     {
  //       headers,

  //     },
  //     { mode: 'cors'},
  //   )
  //   .then((response) => console.log(response)
  //   )
  //   .catch((error) => {
  //     console.log(error.message)
     
  //   });
  //   e.preventDefault();
  
  // }

  return (
    <div className="home border-0 rounded-0">
      <div className="card-home">
        <h5 className="card-title">User name</h5>
        <form onSubmit={handleSubmit} >
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

export default UserSubmit;
