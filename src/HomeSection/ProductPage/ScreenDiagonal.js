import React from "react";
import ToggleSection from "./ToggleSection";

export default function ScreenDiagonal() {
  return (
    <ToggleSection title="Screen Diagonal">
      <form>
        <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
        <input type="search" placeholder="Search diagonal..." />
      </form>

      <div className="ScreenDiagonalList">
        <ul>
          <li>
            <input type="checkbox" id="less-than-5" />
            <label htmlFor="less-than-5">Less than 5 inches</label>
          </li>
          <li>
            <input type="checkbox" id="5-6" />
            <label htmlFor="5-6">5 - 6 inches</label>
          </li>
          <li>
            <input type="checkbox" id="6-7" />
            <label htmlFor="6-7">6 - 7 inches</label>
          </li>
          <li>
            <input type="checkbox" id="more-than-7" />
            <label htmlFor="more-than-7">More than 7 inches</label>
          </li>
        </ul>
      </div>
    </ToggleSection>
  );
}
