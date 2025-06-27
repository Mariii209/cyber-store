import React from "react";

export default function Filters() {
  return (
    <div>
      <div>
        <h2>Filters</h2>
        <i class="fa-solid fa-sliders-h"></i>
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
