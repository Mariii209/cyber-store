import React from "react";
import NavBar from "../../NavBar";
import CategoryPath from "../ProductPage/CategoryPath";
import ProductDetailCard from "./ProductDetailCard";
import { iphone14Series } from "../../ProductData/Phones/Apple/Iphone14";

import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const product = iphone14Series.find((item) => item.id === id);

  if (!product) {
    return (
      <div>
        <NavBar />
        <CategoryPath category="Phone" id="iPhone" />
        <h2>Product not found 😢</h2>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <CategoryPath category="Phone" id={product.name} />
      <ProductDetailCard product={product} />
    </div>
  );
}
