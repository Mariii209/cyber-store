import React from "react";
import "./ServiceHightlights.css";

export default function ServiceHighlights() {
  return (
    <div className="ServiceHighlights">
      <div className="InfoItem">
        <i class="fa-solid fa-truck"></i>
        <div>
          <strong>Free Delivery</strong>
          <p>1–2 day</p>
        </div>
      </div>

      <div className="InfoItem">
        <i class="fa-solid fa-store"></i>
        <div>
          <strong>In Stock</strong>
          <p>Today</p>
        </div>
      </div>

      <div className="InfoItem">
        <i class="fa-solid fa-certificate"></i>
        <div>
          <strong>Guaranteed</strong>
          <p>1 year</p>
        </div>
      </div>
    </div>
  );
}
