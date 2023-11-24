import "./App.css";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", {
        withCredentials: true,
      })
      .then((res) => {
        const user = res.data;
        dispatch(setUser(user));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <Routes>
        {user.email && user.isAdmin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/admin" element={<h1>JOACO ES ADMIN</h1>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<Login />} />
          </>
        )}
        {!user.email && <Route path="/" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
