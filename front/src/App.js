import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Logged from "./pages/Logged";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const handleLogout = () => {
    axios.post("http://localhost:3001/api/logout").then(() => {});
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/me", { withCredentials: true })
      .then((res) => {
        const user = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/home" element={<Logged />} />
      </Routes>
    </Router>
  );
}

export default App;
