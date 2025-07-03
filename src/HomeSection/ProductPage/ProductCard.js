import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="ProductCard">
      <i className="fa-regular fa-heart Heart"></i>
      <Link to="/product/phone">
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
