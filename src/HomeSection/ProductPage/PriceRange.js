import React, { useState } from "react";
import ToggleSection from "./ToggleSection";
import "./PriceRange.css";

export default function PriceRange() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value < maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <ToggleSection title="Price">
      <div className="price-range-container">
        <div className="price-labels">
          <span>Min: ${minPrice}</span>
          <span>Max: ${maxPrice}</span>
        </div>

        <input
          type="range"
          min="0"
          max="3000"
          value={minPrice}
          onChange={handleMinChange}
        />
        <input
          type="range"
          min="0"
          max="3000"
          value={maxPrice}
          onChange={handleMaxChange}
        />
      </div>
    </ToggleSection>
  );
}
