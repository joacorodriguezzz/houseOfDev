import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleView() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Hacer una solicitud para obtener detalles de la propiedad por ID
    axios
      .get(`http://localhost:3001/api/properties/propiedades/${id}`)
      .then((response) => {
        setProperty(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error al obtener detalles de la propiedad", error);
      });
  }, [id]);

  return (
    <div>
      <h1>hola</h1>
      {property ? (
        <>
          <h2>Detalles de la Propiedad</h2>
          <p>ID: {property.id}</p>
          <p>Ubicación: {property.ubicacion}</p>
          <p>Descripcion: {property.descripcion}</p>
          <img src={property.img} alt="" />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default SingleView;
