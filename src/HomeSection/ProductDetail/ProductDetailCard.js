import React from "react";
import "./ProductDetailCard.css";

export default function ProductDetailCard({ product }) {
  return (
    <div className="ProductDetailCard">
      <img className="ProductImage" src={product.image} alt={product.name} />

      <h1 className="ProductTitle">Apple iPhone 14 Pro Max</h1>
      <div className="PriceContainer">
        <h4 className="ProductPrice">$1399</h4>
        <h5 className="OriginalPrice">$1499</h5>
      </div>

      <div className="ColorContainer">
        <p className="ColorLabel">Select color:</p>
        <div className="ColorOptions">
          <div className="ColorOption"></div>
          <div className="ColorOption"></div>
          <div className="ColorOption"></div>
        </div>
      </div>

      <div className="ProductSpecs">
        <div className="ProductSpec">
          <i className="fa-solid fa-mobile-screen-button SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">Screen Size</p>
            <p className="SpecValue">6.7"</p>
          </div>
        </div>

        <div className="ProductSpec">
          <i className="fa-solid fa-microchip SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">CPU</p>
            <p className="SpecValue">Apple A16 Bionic</p>
          </div>
        </div>

        <div className="ProductSpec">
          <i className="fa-solid fa-microchip SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">Number of Cores</p>
            <p className="SpecValue">6</p>
          </div>
        </div>

        <div className="ProductSpec">
          <i className="fa-solid fa-camera SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">Main Camera</p>
            <p className="SpecValue">48 MP</p>
          </div>
        </div>

        <div className="ProductSpec">
          <i className="fa-solid fa-camera-rotate SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">Front Camera</p>
            <p className="SpecValue">12 MP</p>
          </div>
        </div>

        <div className="ProductSpec">
          <i className="fa-solid fa-battery-three-quarters SpecIcon"></i>
          <div className="SpecDetail">
            <p className="SpecLabel">Battery Life</p>
            <p className="SpecValue">Up to 29 hrs</p>
          </div>
        </div>
      </div>

      <p className="ProductDescription">
        Enhanced capabilities thanks to an enlarged display of 6.7 inches and
        all-day battery life. Capture incredible photos in low or bright light
        with a powerful new dual-camera system.
      </p>

      <div className="ProductActions">
        <button className="WishlistButton">Add to Wishlist</button>
        <button className="CartButton">Add to Cart</button>
      </div>
    </div>
  );
}
