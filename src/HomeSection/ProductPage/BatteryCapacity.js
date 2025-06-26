import React from "react";

export default function BatteryCapacity() {
  return (
    <div className="BatteryCapacity">
      <h3>Battery Capacity</h3>
      <i className="fa-solid fa-chevron-up"></i>
      <hr />
      <form>
        <input type="search" name="" id="" placeholder="Search capacity..." />
      </form>
      <div className="BatteryCapacityList">
        <ul>
          <li>Less than 3000mAh</li>
          <li>3000mAh - 4000mAh</li>
          <li>4000mAh - 5000mAh</li>
          <li>5000mAh - 6000mAh</li>
          <li>More than 6000mAh</li>
        </ul>
      </div>
    </div>
  );
}
