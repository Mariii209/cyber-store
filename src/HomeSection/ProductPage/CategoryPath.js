import React from "react";
import "./CategoryPath.css";

export default function CategoryPath({ category }) {
  return (
    <div className="CategoryPath">
      <ul className="NavPath">
        <li>Home</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li>Catalog</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li>{category}</li>
      </ul>
    </div>
  );
}
