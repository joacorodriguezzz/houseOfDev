import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function PropertiesContainer() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/propiedades")
      .then((res) => {
        setProperties(res.data);
      });
  }, []);

  const gridContainerStyle = {};
  return (
    <div className="bg-[#FDFDFD] flex items-center justify-center lg:h-screen min-h-[100vh] w-[100%]  z-0">
      <div
        style={gridContainerStyle}
        className="container mx-auto mx-auto p-4 "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {properties.map((property, index) => (
            <div key={index} className="bg-[#F9F9F9] rounded-lg border p-4">
              <img
                src={property.img}
                alt={`Property ${index + 1}`}
                className="w-full h-48 rounded-md object-cover"
              />
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">
                  {property.ubicacion}
                </div>
                <p className="text-gray-700 text-base">
                  {property.descripcion}
                </p>
              </div>
              <div className="px-1 py-4">
                <Link
                  to={`/propiedades/${property.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Más información...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div style={gridContainerStyle}>
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
</div> */
}

export default PropertiesContainer;
