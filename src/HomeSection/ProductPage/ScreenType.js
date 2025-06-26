import React from "react";

export default function ScreenType() {
  return (
    <div className="ScreenType">
      <h3>Screen Type</h3>
      <i className="fa-solid fa-chevron-up"></i>
      <hr />
      <form>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search screen type..."
        />
      </form>
      <div className="ScreenTypeList">
        <ul>
          <li>LCD</li>
          <li>OLED</li>
          <li>AMOLED</li>
          <li>Super AMOLED</li>
          <li>Retina</li>
        </ul>
      </div>
    </div>
  );
}
