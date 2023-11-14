import React from "react";
import "./components/form.css";
import { useState } from "react";
export default function Register({ setUser }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);
    setUser([usuario]);
  };

  return (
    <section>
      <h1 className="registroForm">Registro</h1>
      <form className="registroForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      {error && <p>todos los campos son obligatorios</p>}
    </section>
  );
}
