import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div>
      <ul>
        <li>Home</li>
        <li> Catalog</li>
        <li>{category}</li>
      </ul>
    </div>
  );
}
