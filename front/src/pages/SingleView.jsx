import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function SingleView() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [hora, setHora] = useState(null);
  const [fecha, setFecha] = useState(null);
  const user = useSelector((state) => state.user);

  const handleAgend = () => {
    if (hora && fecha && user.id) {
      const citaData = {
        hora: hora,
        fecha: fecha,
        userId: user.id,
        edificioId: id,
      };
      console.log(hora);
      console.log(fecha);

      axios
        .post(`http://localhost:3001/api/citas/reservar`, citaData)
        .then((response) => {
          alert("Cita creada con exito!", response);
        })
        .catch((error) => {
          alert("Fecha y horario no disponible!");
          console.error("Error al agendar la cita:", error.response);
        });
    } else {
      console.log("Seleccione fecha y horario antes de agendar");
    }
  };

  useEffect(() => {
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

  const handleFechaChange = (e) => {
    const inputValue = e.target.value;
    setFecha(inputValue);
  };

  const handleHoraClick = (horaElegida) => {
    setHora(horaElegida);
  };

  return (
    <div className="bg-[#f9f9f9]">
      <section className="px-4 py-4 bg-[#f9f9f9] lg:px-20 lg:py-8">
        <div className="flex flex-wrap lg:space-x-12">
          <div className="lg:w-3/5">
            <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 lg:text-3xl">
              {property?.ubicacion}
            </h1>
            <img
              src={property?.img}
              alt="property"
              className="rounded-xl w-70 h-100"
            />

            <div className="mt-4">
              <h4 className="text-2xl font-bold">Descripcion</h4>
              <p className="my-4">{property?.descripcion}</p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mt-4">
            <h4 className="text-2xl font-bold text-center text-blue-700">
              Detalles de la propiedad
            </h4>
            <div className="flex flex-wrap ">
              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-blue-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="font-medium">{property?.baños} Baños</span>
                </div>
              </div>
              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-blue-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="font-medium">
                    {property?.cantidadAmbientes} Ambientes
                  </span>
                </div>
              </div>

              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-blue-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="font-medium">
                    {property?.metrosCuadrados} M2
                  </span>
                </div>
              </div>

              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-blue-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="font-medium">{property?.precio} USD</span>
                </div>
              </div>
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
                    autoFocus="autofocus"
                    type="date"
                    min="2023-12-01"
                    max="2023-12-31"
                    class="datepicker-input block w-full rounded-lg border border-blue-100 bg-[#f9f9f9] p-2.5 pl-10 text-blue-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm"
                    value={fecha}
                    onChange={handleFechaChange}
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
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("09:00")}
                  >
                    09:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("11:00")}
                  >
                    11:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("12:00")}
                  >
                    12:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("13:00")}
                  >
                    13:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("16:00")}
                  >
                    16:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("17:00")}
                  >
                    17:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("18:00")}
                  >
                    18:00
                  </button>

                  <button
                    id="btn"
                    class="rounded-lg bg-blue-100 px-4 py-2 font-medium text-black active:scale-95 hover:bg-blue-300 focus:bg-blue-600 focus:text-white"
                    onClick={() => handleHoraClick("19:00")}
                  >
                    19:00
                  </button>
                  <button
                    class="mt-8 w-56 rounded-xl border-8 border-red-500 bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1"
                    onClick={handleAgend}
                  >
                    Agendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>

      <div className="lg:flex lg:justify-evenly"></div>
    </div>
  );
}

export default SingleView;
