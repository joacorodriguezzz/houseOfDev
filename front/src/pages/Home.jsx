import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-6">Bienvenido a la Página de Inicio</h1>
      <p className="text-lg mb-8">Registrate o inicia sesión</p>

      <Link to="/register">
        <button className="bg-blue-500 text-white px-4 py-2 mr-4">
          Registrarse
        </button>
      </Link>

      <Link to="/login">
        <button className="bg-green-500 text-white px-4 py-2">
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
};

export default Home;
