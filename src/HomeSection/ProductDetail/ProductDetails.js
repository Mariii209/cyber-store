import React from "react";
import NavBar from "../../NavBar";
import CategoryPath from "../ProductPage/CategoryPath";
import ProductDetailCard from "./ProductDetailCard";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <NavBar />
      <CategoryPath category="Phone" id="iPhone" />
      <ProductDetailCard product={id} />
      <div>Showing details for product ID: {id}</div>
    </div>
  );
}
