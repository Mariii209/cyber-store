import React, { useState } from "react";
import Brand from "./Brand";
import BatteryCapacity from "./BatteryCapacity";
import ScreenType from "./ScreenType";
import ScreenDiagonal from "./ScreenDiagonal";
import ProtectionClass from "./ProtectionClass";
import BuiltInMemory from "./BultInMemory";
import PriceRange from "./PriceRange";
import "./Filters.css";

export default function Filters() {
  const [showFilterCategory, setShowFilterCategory] = useState(false);

  const toggleFilterCategory = () => {
    setShowFilterCategory(!showFilterCategory);
  };

  return (
    <div className="Filters">
      <div className="FiltersHeader" onClick={toggleFilterCategory}>
        <h2>Filters</h2>
        <i className="fa-solid fa-sliders-h"></i>
      </div>

      {showFilterCategory && (
        <div className="FilterCategory">
          <div className="FilterCategoryHeader " onClick={toggleFilterCategory}>
            <i className="fa-solid fa-chevron-left"></i>
            <h4>Filters</h4>
          </div>
          <PriceRange />
          <Brand />
          <BatteryCapacity />
          <ScreenType />
          <ScreenDiagonal />
          <ProtectionClass />
          <BuiltInMemory />
        </div>
      )}

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
