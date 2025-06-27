import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import SideFilter from "./SideFilter";
import "./ProductPagePhone.css";
import Phones from "./Phones";
import Footer from "../../Footer";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div className="ProductPagePhone">
      <NavBar />
      <div className="ProductPagePhoneContent">
        <ul className="NavPath">
          <li>Home</li>
          <i className="fa-solid fa-chevron-right"></i>
          <li> Catalog</li>
          <i className="fa-solid fa-chevron-right"></i>
          <li>{category}</li>
        </ul>
        <div className="Content">
          <SideFilter />
          <Phones />
        </div>
      </div>
      <Footer />
    </div>
  );
}
