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
          <li>
            <input type="checkbox" id="apple" />
            <label htmlFor="apple">Apple</label>
          </li>
          <li>
            <input type="checkbox" id="samsung" />
            <label htmlFor="samsung">Samsung</label>
          </li>
          <li>
            <input type="checkbox" id="google" />
            <label htmlFor="google">Google </label>
          </li>
          <li>
            <input type="checkbox" id="huawei" />
            <label htmlFor="oneplus">OnePlus</label>
          </li>
          <li>
            <input type="checkbox" id="xiaomi" />
            <label htmlFor="xiaomi">Xiaomi</label>
          </li>
          <li>
            <input type="checkbox" id="oppo" />
            <label htmlFor="oppo">Oppo</label>
          </li>
          <li>
            <input type="checkbox" id="vivo" />
            <label htmlFor="vivo">Vivo</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
