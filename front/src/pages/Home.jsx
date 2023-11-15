import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-6">Bienvenido a la Página de Inicio</h1>
      <p className="text-lg mb-8">
        Esta es información provisional para tu página de inicio.
      </p>

      {/* Botón para redirigir a la página de registro */}
      <Link to="/register">
        <button className="bg-blue-500 text-white px-4 py-2 mr-4">
          Registrarse
        </button>
      </Link>

      {/* Botón para redirigir a la página de inicio de sesión */}
      <Link to="/login">
        <button className="bg-green-500 text-white px-4 py-2">
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
};

export default Home;
