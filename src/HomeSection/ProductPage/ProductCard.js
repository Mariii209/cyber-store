import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="ProductCard">
      <i className="fa-regular fa-heart Heart"></i>

      <img src={image} alt={title} />
      <p className="ProductTitle">{title}</p>

      <p className="ProductPrice">${price}</p>
      <div className="BuyButtonWrapper">
        <a className="BuyNowButton" href="/">
          Buy Now
        </a>
      </div>
    </div>
  );
}
