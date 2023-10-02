import React, { useState } from "react";
import axios from 'axios'

import{useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate()
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const loginUser = (e) => {
    e.preventDefault();
   
    const { username, password } = data;
    const { response } = axios.post("/api/auth/login", {
        username,
        password,
      });
      navigate('/');
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
