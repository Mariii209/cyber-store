import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import NavBar from "../../NavBar";
import CategoryPath from "../ProductPage/CategoryPath";
import ProductDetailCard from "./ProductDetailCard";
import ServiceHighlights from "./ServiceHightlights";

import { iphone14Series } from "../../ProductData/Phones/Apple/Iphone14";

export default function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const selectedColor = searchParams.get("color");

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

  // Try to find the color, fallback to first one if not found
  const colorData =
    product.colors.find(
      (color) => color.name.toLowerCase() === selectedColor?.toLowerCase()
    ) || product.colors[0];

  return (
    <div>
      <NavBar />
      <CategoryPath
        category="Phone"
        id={`${product.name} - ${colorData.name}`}
      />
      <ProductDetailCard product={product} selectedColor={colorData} />
      <ServiceHighlights />
    </div>
  );
}
