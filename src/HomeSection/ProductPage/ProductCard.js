import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ id, color, image, title, price }) {
  return (
    <div className="ProductCard">
      <i className="fa-regular fa-heart Heart"></i>
      <Link
        to={`/product/${id}?color=${encodeURIComponent(color)}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={image} alt={title} />
        <p className="ProductTitle">{title}</p>
      </Link>
      <p className="ProductPrice">${price}</p>
      <div className="BuyButtonWrapper">
        <a className="BuyNowButton" href="/">
          Buy Now
        </a>
      </div>
    </div>
  );
}
