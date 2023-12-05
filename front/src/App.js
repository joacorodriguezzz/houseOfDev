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
import Profile from "./pages/Profile";
import CrearPropiedad from "./pages/CrearPropiedad";
import FilterList from "./components/filterList";
import SingleView from "./pages/SingleView";
import Search from "./pages/Search";
import Prueba from "./pages/Prueba";
import UserList from "./pages/UserList";
import CitasLista from "./pages/CitasLista";

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
    <div className="bg-[#f9f9f9] w-[100%] min-h-[100vh] ">
      <NavBar />

      <Routes>
        {user.email && user.isAdmin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/admin" element={<h1>JOACO ES ADMIN</h1>} />
            <Route path="/crear-propiedad" element={<CrearPropiedad />} />
            <Route path="/citas-lista" element={<CitasLista />} />
            <Route path="/usuarios-lista" element={<UserList />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/propiedades/:id" element={<SingleView />} />
            <Route path="/search" element={<Search />} />
          </>
        ) : (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/prueba" element={<FilterList />} />
            <Route path="/propiedades/:id" element={<SingleView />} />
            <Route path="/search" element={<Search />} />
          </>
        )}
        {!user.email && <Route path="/" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
