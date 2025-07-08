import React from "react";
import "./ServiceHightlights.css";

export default function ServiceHighlights() {
  return (
    <div className="ServiceHighlights">
      <div className="InfoItem">
        <i class="fa-solid fa-truck"></i>
        <div>
          <h6>Free Delivery</h6>
          <p>1–2 day</p>
        </div>
      </div>

      <div className="InfoItem">
        <i class="fa-solid fa-store"></i>
        <div>
          <h6>In Stock</h6>
          <p>Today</p>
        </div>
      </div>

      <div className="InfoItem">
        <i class="fa-solid fa-certificate"></i>
        <div>
          <h6>Guaranteed</h6>
          <p>1 year</p>
        </div>
      </div>
    </div>
  );
}
