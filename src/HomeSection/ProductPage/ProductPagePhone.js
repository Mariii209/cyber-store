import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import SideFilter from "./SideFilter";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div>
      <NavBar />
      <ul>
        <li>Home</li>
        <li> Catalog</li>
        <li>{category}</li>
      </ul>
      <dic className="Content">
        <SideFilter />
      </dic>
    </div>
  );
}
