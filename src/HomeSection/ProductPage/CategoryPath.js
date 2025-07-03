import React from "react";
import "./CategoryPath.css";

export default function CategoryPath({ category, id }) {
  return (
    <div className="CategoryPath">
      <ul className="NavPath">
        <li>Home</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li>Catalog</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li>{category}</li>
        {id && (
          <>
            <i className="fa-solid fa-chevron-right"></i>
            <li> Apple</li>
            <i className="fa-solid fa-chevron-right"></i>
            <li>{id}</li>
          </>
        )}
      </ul>
    </div>
  );
}
