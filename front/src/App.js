import "./App.css";
import Register from "./Register";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div>
      <Register setUser={setUser} />
      <Home />
    </div>
  );
}

export default App;
