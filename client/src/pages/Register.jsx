import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    country: "",
    image: "",
    city: "",
    phone: "",
    password: "",
  });
  const registerUser = (e) => {
    e.preventDefault();
    const { username, email, country, image, city, phone, password } = data;

    const { response } = axios.post("/api/auth/register", {
      username,
      email,
      country,
      image,
      city,
      phone,
      password,
    });
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Email</label>
        <input
          type="mail"
          placeholder="Enter email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter country"
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />
        <label>Image</label>
        <input
          type="text"
          placeholder="Enter image"
          value={data.image}
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <label>City</label>
        <input
          type="text"
          placeholder="Enter city"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
        <label>Phone</label>
        <input
          type="number"
          placeholder="Enter phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
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
