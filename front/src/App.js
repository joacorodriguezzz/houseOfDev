import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import { AuthProvider } from "./context/user";
import Logged from "./pages/Logged";

function App() {
  const [user, setUser] = useState([]);
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/home" element={<Logged />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
