import React from "react";

export default function Brand() {
  return (
    <div className="Brand">
      <div className="Title BrandTitle">
        <h3>Brand</h3>
        <i class="fa-solid fa-chevron-up"></i>
      </div>
      <hr />
      <form>
        <input type="search" placeholder="Search brand..." />
      </form>
      <div className="BrandList">
        <ul>
          <li>Apple</li>
          <li>Samsung</li>
          <li>Google</li>
          <li>OnePlus</li>
          <li>Xiaomi</li>
          <li>Oppo</li>
          <li>Vivo</li>
        </ul>
      </div>
    </div>
  );
}
