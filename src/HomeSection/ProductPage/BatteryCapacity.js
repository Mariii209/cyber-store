import React from "react";
import ToggleSection from "./ToggleSection";

export default function BatteryCapacity() {
  return (
    <ToggleSection title="Battery Capacity">
      <form>
        <i className="fa-solid fa-magnifying-glass SearchIcon"></i>
        <input type="search" placeholder="Search capacity..." />
      </form>

      <div className="BatteryCapacityList">
        <ul>
          <li>
            <input type="checkbox" id="battery-all" name="battery" />
            <label htmlFor="battery-all">All</label>
          </li>
          <li>
            <input type="checkbox" id="battery-less-1000" name="battery" />
            <label htmlFor="battery-less-1000">Less than 1000mAh</label>
          </li>
          <li>
            <input type="checkbox" id="battery-1000-2000" name="battery" />
            <label htmlFor="battery-1000-2000">1000mAh – 2000mAh</label>
          </li>
          <li>
            <input type="checkbox" id="battery-2000-3000" name="battery" />
            <label htmlFor="battery-2000-3000">2000mAh – 3000mAh</label>
          </li>
          <li>
            <input type="checkbox" id="battery-3000-4000" name="battery" />
            <label htmlFor="battery-3000-4000">3000mAh – 4000mAh</label>
          </li>
          <li>
            <input type="checkbox" id="battery-4000-5000" name="battery" />
            <label htmlFor="battery-4000-5000">4000mAh – 5000mAh</label>
          </li>
          <li>
            <input type="checkbox" id="battery-5000-6000" name="battery" />
            <label htmlFor="battery-5000-6000">5000mAh – 6000mAh</label>
          </li>
        </ul>
      </div>
    </ToggleSection>
  );
}
