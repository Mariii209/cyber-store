import React, { useState } from "react";
import "./ProductDetailCard.css";

export default function ProductDetailCard({ product }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);

  const selectedColor = product.colors[selectedColorIndex];
  const selectedStorage = product.memoryOptions[selectedStorageIndex];

  return (
    <div className="ProductDetailCard">
      {/* Main Product Image */}
      <img
        className="ProductImage"
        src={selectedColor.image}
        alt={`${product.name} - ${selectedColor.name}`}
      />

      {/* Product Name */}
      <h1 className="ProductTitle">{product.name}</h1>

      {/* Price (default to first memory option) */}
      <div className="PriceContainer">
        <h4 className="ProductPrice">${selectedStorage.price}</h4>
        <h5 className="OriginalPrice">
          ${Math.round(selectedStorage.price * 1.1)}
        </h5>
      </div>

      {/* Colors */}
      <div className="ColorContainer">
        <p className="ColorLabel">Select color:</p>
        <div className="ColorOptions">
          {product.colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColorIndex(index)}
              className={`ColorOption ${
                index === selectedColorIndex ? "SelectedColor" : ""
              }`}
              style={{
                backgroundImage: `url(${color.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "8px",
                border:
                  index === selectedColorIndex
                    ? "2px solid black"
                    : "1px solid #ccc",
                cursor: "pointer",
              }}
              title={color.name}
            ></div>
          ))}
        </div>
      </div>

      {/* Storage Options */}
      <div className="StorageContianer">
        {product.memoryOptions.map((option, index) => (
          <button
            key={index}
            className={`StorageOption ${
              index === selectedStorageIndex ? "SelectedStorage" : ""
            }`}
            onClick={() => setSelectedStorageIndex(index)}
          >
            {option.size}
          </button>
        ))}
      </div>

      {/* Specs (still hardcoded for now) */}
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

      {/* Product Description */}
      <p className="ProductDescription">{product.description}</p>

      {/* Action Buttons */}
      <div className="ProductActions">
        <button className="WishlistButton">Add to Wishlist</button>
        <button className="CartButton">Add to Cart</button>
      </div>
    </div>
  );
}
