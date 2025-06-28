import React from "react";
import "./Filters.css";

export default function Filters() {
  return (
    <div className="Filters">
      <div className="FiltersHeader">
        <h2>Filters</h2>
        <i className="fa-solid fa-sliders-h"></i>
      </div>

      <div className="SelectWrapper">
        <i className="fa-solid fa-chevron-down"></i>
        <select>
          <option>By rating</option>
          <option>By price</option>
          <option>By popularity</option>
        </select>
      </div>
    </div>
  );
}
