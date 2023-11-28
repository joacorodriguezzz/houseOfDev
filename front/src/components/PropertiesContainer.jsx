import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function PropertiesContainer() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/propiedades")
      .then((res) => {
        setProperties(res.data);
      });
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "50px",
    padding: "20px",
  };

  const inmuebleCardStyle = {
    backgroundColor: "black",
    border: "1px solid #e1e1e1",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    color: "white",
  };

  const inmuebleImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div style={gridContainerStyle}>
      {properties?.map((property) => (
        <div key={property.id} style={inmuebleCardStyle}>
          <Link to={`/propiedades/${property.id}`}>
            <img
              src={property.img}
              alt={property.barrio}
              style={inmuebleImageStyle}
            />
          </Link>
          <div>
            <h3>{property.barrio}</h3>
            <h4>{property.ubicacion}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertiesContainer;
