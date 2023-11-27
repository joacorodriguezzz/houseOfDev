// FilterByPrice.jsx

import React, { useState } from "react";

const FilterByPrice = ({ products, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterChange = () => {
    // Validar que ambos campos sean números antes de aplicar el filtro
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      // Filtrar productos y pasar la nueva lista al componente padre
      const filteredProducts = products.filter(
        (product) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
      onFilterChange(filteredProducts);
    }
  };

  return (
    <div>
      <label>
        Precio mínimo:
        <input
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Precio máximo:
        <input
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button onClick={handleFilterChange}>Filtrar</button>
    </div>
  );
};

export default FilterByPrice;
