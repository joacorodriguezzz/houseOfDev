import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaDollarSign } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function PropertiesContainer() {
  const [properties, setProperties] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/properties/propiedades")
      .then((res) => {
        setProperties(res.data);
      });
  }, []);

  return (
    <div className="bg-[#F7F3EE] flex items-center justify-center lg:h-screen min-h-[100vh] w-[100%]">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-[#fdf6ee] rounded-lg border p-4 transition-transform transform hover:shadow-md duration-300"
            >
              <Link to={`/propiedades/${property.id}`}>
                <img
                  src={property.img}
                  alt={`Property ${index + 1}`}
                  className="w-full h-48 rounded-md object-cover"
                />
              </Link>
              <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">
                  {property.ubicacion}
                </div>
                <p className="text-gray-700 text-base">
                  {property.descripcion}
                </p>
              </div>
              <div
                className={`flex items-center justify-between px-1 py-4 ${
                  user.isAdmin ? "text-blue-800" : "text-red-500"
                }`}
              >
                <div className="flex items-center">
                  <FaDollarSign className="mr-2" />
                  <p className="font-bold">{property.precio}</p>
                </div>
                <div className="flex items-center">
                  <FaBed className="mr-2" />
                  <p>{property.cantidadAmbientes}</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <p>{property.barrio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertiesContainer;
