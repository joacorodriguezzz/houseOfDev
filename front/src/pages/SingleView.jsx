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
      <div class="">
        <p class="mt-8 font-serif text-xl font-bold text-blue-900">
          Seleccione una fecha
        </p>
        <div class="relative mt-4 w-56">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            datepicker=""
            datepicker-orientation="bottom"
            autofocus="autofocus"
            type="text"
            class="datepicker-input block w-full rounded-lg border border-red-300 bg-red-50 p-2.5 pl-10 text-red-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm"
            placeholder="Seleccione una fecha"
          />
        </div>
      </div>

      <div class="">
        <p class="mt-8 font-serif text-xl font-bold text-blue-900">
          Seleccione un horario
        </p>

        <div class="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            09:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            11:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            12:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            13:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            16:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            17:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            18:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
          >
            19:00
          </button>
        </div>
      </div>

      <button class="mt-8 w-56 rounded-full border-8 border-red-500 bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">
        Book Now
      </button>
    </div>
  );
}

export default SingleView;
