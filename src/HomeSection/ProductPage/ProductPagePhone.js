import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import SideFilter from "./SideFilter";
import "./ProductPagePhone.css";
import Phones from "./Phones";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div className="ProductPagePhone">
      <NavBar />
      <ul className="NavPath">
        <li>Home</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li> Catalog</li>
        <i className="fa-solid fa-chevron-right"></i>
        <li>{category}</li>
      </ul>
      <dic className="Content">
        <SideFilter />
        <Phones />
      </dic>
    </div>
  );
}
