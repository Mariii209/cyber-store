import React from "react";

export default function ScreenType() {
  return (
    <div className="ScreenType Section">
      <div className="Title ScreenTypeTitle">
        <h3>Screen Type</h3>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <hr />
      <form>
        <i class="fa-solid fa-magnifying-glass SearchIcon"></i>
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
    </div>
  );
}
