import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import SideFilter from "./SideFilter";
import "./ProductPagePhone.css";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div className="ProductPagePhone">
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
