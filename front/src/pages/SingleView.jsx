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
          console.error("Error al agendar la cita:", error);
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
    let sanitizedInput = e.target.value.replace(/[^0-9]/g, "");

    if (sanitizedInput.length >= 2) {
      sanitizedInput = `${sanitizedInput.slice(0, 2)}/${sanitizedInput.slice(
        2
      )}`;
    }

    setFecha(sanitizedInput);
  };

  const handleHoraClick = (horaElegida) => {
    setHora(horaElegida);
  };

  return (
    <div>
      <div>
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            Informacion de la propiedad
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {property?.descripcion}
          </p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900"></dt>
              <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <img src={property?.img} alt="" />
              </dd>
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Ubicacion
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {property?.ubicacion}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Metros cuadrados
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {property?.metrosCuadrados}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Ambientes
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {property?.cantidadAmbientes}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Baños</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {property?.baños}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Precio
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {property?.precio} USD
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"></div>
          </dl>
        </div>
      </div>{" "}
      <button
        type="button"
        class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
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
            placeholder="dd/mm"
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
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("09:00")}
          >
            09:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("11:00")}
          >
            11:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("12:00")}
          >
            12:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("13:00")}
          >
            13:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("16:00")}
          >
            16:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("17:00")}
          >
            17:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("18:00")}
          >
            18:00
          </button>

          <button
            id="btn"
            class="rounded-lg bg-red-100 px-4 py-2 font-medium text-red-900 active:scale-95 hover:bg-red-300 focus:bg-red-600 focus:text-white"
            onClick={() => handleHoraClick("19:00")}
          >
            19:00
          </button>
        </div>
      </div>
      <button
        class="mt-8 w-56 rounded-full border-8 border-red-500 bg-red-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1"
        onClick={handleAgend}
      >
        Agendar
      </button>
    </div> ///////////////
  );
}

export default SingleView;
