import "./App.css";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
