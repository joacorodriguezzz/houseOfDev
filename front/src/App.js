import "./App.css";
import Register from "./Register";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div>{!user.length > 0 ? <Register setUser={setUser} /> : <Login />}</div>
  );
}

export default App;
