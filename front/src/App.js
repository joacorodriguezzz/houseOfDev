import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect } from "react";
import Logged from "./pages/Logged";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/me", {
        withCredentials: true,
        token: window.localStorage.getItem("token"),
      })
      .then((res) => {
        const user = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/inicio" element={<Logged />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logIn" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
