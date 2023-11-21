import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logged() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("http://localhost:3001/api/logout").then(() => {
      setUser({});
      navigate("/");
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/home")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>bienvenido, {user.name}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
