import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="Category container">
      <div className="CategoryBrowser">
        <h4>Browse By Category</h4>
        <div>
          <i class="fa-regular fa-circle-left me-4 Arrow"></i>
          <i class="fa-regular fa-circle-right Arrow"></i>
        </div>
      </div>
      <div className="CategoryList">
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-mobile-screen-button CategoryIcon"></i>
          </div>
          <p>Phones</p>
        </div>
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-tv CategoryIcon"></i>
          </div>
          <p>Smart TV</p>
        </div>
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-camera CategoryIcon"></i>
          </div>
          <p>Cameras</p>
        </div>
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-headphones CategoryIcon"></i>
          </div>
          <p>Headphones</p>
        </div>
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-computer CategoryIcon"></i>
          </div>
          <p>Computer</p>
        </div>
        <div className="CategoryItem">
          <div>
            <i class="fa-solid fa-gamepad CategoryIcon"></i>
          </div>
          <p>Gaming</p>
        </div>
      </div>
    </div>
  );
}
