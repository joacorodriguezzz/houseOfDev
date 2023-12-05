import React, { useState } from "react";

const RealEstateComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-white" x-data="{ isOpen: false }">
        <nav className="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a
              className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
              href="#"
            >
              Real Estate
            </a>
            <div onClick={() => setIsOpen(!isOpen)} className="flex md:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={isOpen ? "flex" : "hidden"}>
            <a
              className="text-sm text-gray-800 hover:text-blue-400"
              href="index.html"
            >
              Home
            </a>
            <a
              className="text-sm text-gray-800 hover:text-blue-400"
              href="properties.html"
            >
              Properties
            </a>
            <a
              className="text-sm text-gray-800 hover:text-blue-400"
              href="single-property.html"
            >
              Single Properties
            </a>
            <a
              className="text-sm text-gray-800 hover:text-blue-400"
              href="contact-us.html"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>

      <section className="p-8 text-center bg-gradient-to-r from-blue-200 to-purple-500 lg:p-20">
        <h1 className="mb-2 text-2xl font-bold text-gray-700 lg:text-5xl">
          Properties
        </h1>
        <div className="text-white">
          <span className="text-blue-800">Home -</span> Single Property
        </div>
      </section>

      <section className="px-4 py-4 bg-gray-200 lg:px-20 lg:py-8">
        <div className="flex flex-wrap lg:space-x-12">
          <div className="lg:w-3/5">
            <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="property"
              className="w-full"
            />
            <div className="flex mt-4 space-x-4">
              {/* Imágenes adicionales */}
            </div>
            <div className="mt-4">
              <h4 className="text-2xl font-bold">Description</h4>
              <p className="my-4">{/* Descripción completa */}</p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mt-4">
            <h4 className="text-2xl font-bold text-center text-blue-700">
              Property Details
            </h4>
            <div className="flex flex-wrap ">
              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
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
                  <span className="font-medium">4 Beds</span>
                </div>
              </div>
              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
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
                  <span className="font-medium">3 Beds</span>
                </div>
              </div>

              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
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
                  <span className="font-medium">2 Beds</span>
                </div>
              </div>

              <div className="w-full p-2 lg:w-1/2">
                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
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
                  <span className="font-medium">5 Beds</span>
                </div>
              </div>

              {/* Otras propiedades como baños, área, etc. */}
            </div>
          </div>
        </div>
      </section>
      <section></section>

      <div className="lg:flex lg:justify-evenly"></div>
    </div>
  );
};
export default RealEstateComponent;
