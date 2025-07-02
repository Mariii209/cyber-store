import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import SideFilter from "./SideFilter";
import "./ProductPagePhone.css";
import Phones from "./Phones";
import Footer from "../../Footer";
import Filters from "./Filters";
import CategoryPath from "./CategoryPath";

export default function ProductPagePhone() {
  const { category } = useParams();
  return (
    <div className="ProductPagePhone">
      <NavBar />
      <div className="ProductPagePhoneContent">
        <CategoryPath category={category} />
        <Filters />
        <div className="Content">
          <SideFilter />
          <Phones />
        </div>
      </div>
      <Footer />
    </div>
  );
}
