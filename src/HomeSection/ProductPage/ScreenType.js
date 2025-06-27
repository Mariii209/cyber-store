import React from "react";
import ToggleSection from "./ToggleSection";

export default function ScreenType() {
  return (
    <ToggleSection title="Screen Type">
      <form>
        <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
        <input type="search" placeholder="Search screen type..." />
      </form>

      <div className="ScreenTypeList">
        <ul>
          <li>
            <input type="checkbox" id="LCD" />
            <label htmlFor="LCD">LCD</label>
          </li>
          <li>
            <input type="checkbox" id="OLED" />
            <label htmlFor="OLED">OLED</label>
          </li>
          <li>
            <input type="checkbox" id="AMOLED" />
            <label htmlFor="AMOLED">AMOLED</label>
          </li>
          <li>
            <input type="checkbox" id="Super AMOLED" />
            <label htmlFor="Super AMOLED">Super AMOLED</label>
          </li>
          <li>
            <input type="checkbox" id="Retina" />
            <label htmlFor="Retina">Retina</label>
          </li>
        </ul>
      </div>
    </ToggleSection>
  );
}
