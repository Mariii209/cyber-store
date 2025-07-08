import React, { useState } from "react";
import "./ProductDetailCard.css";

export default function ProductDetailCard({ product, selectedColor }) {
  // Find the initial color index based on the passed selectedColor prop
  const defaultColorIndex = product.colors.findIndex(
    (c) => c.name.toLowerCase() === selectedColor?.name.toLowerCase()
  );

  const [selectedColorIndex, setSelectedColorIndex] = useState(
    defaultColorIndex !== -1 ? defaultColorIndex : 0
  );

  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const color = product.colors[selectedColorIndex];
  const storage = product.memoryOptions[selectedStorageIndex];

  return (
    <div className="ProductDetailCard">
      {/* Main Product Image */}
      <div className="ProductImageContainer">
        <div className="ImageThumbnails">
          {color.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - ${color.name} view ${index + 1}`}
              className={`ThumbnailImage ${
                index === selectedColorIndex ? "ActiveThumbnail" : ""
              }`}
              onClick={() => setSelectedThumbnailIndex(index)}
            />
          ))}
        </div>

        <img
          className="ProductImage"
          src={color.images[selectedThumbnailIndex]}
          alt={`${product.name} - ${color.name}`}
        />
      </div>

      <div className="ProductInfoContainer">
        {/* Product Name */}
        <h1 className="ProductTitle">{product.name}</h1>

        {/* Price */}
        <div className="PriceContainer">
          <h4 className="ProductPrice">${storage.price}</h4>
          <h5 className="OriginalPrice">${Math.round(storage.price * 1.1)}</h5>
        </div>

        {/* Colors */}
        <div className="ColorContainer">
          <p className="ColorLabel">Select color:</p>
          <div className="ColorOptions">
            {product.colors.map((c, index) => (
              <div
                key={index}
                onClick={() => setSelectedColorIndex(index)}
                className={`ColorOption ${
                  index === selectedColorIndex ? "SelectedColor" : ""
                }`}
                style={{
                  backgroundImage: `url(${c.image})`,
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
                title={c.name}
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

        {/* Product Specs */}
        <div className="ProductSpecs">
          <div className="ProductSpec">
            <i className="fa-solid fa-mobile-screen-button SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">Screen Size</p>
              <p className="SpecValue">{product.screenDiagonal}</p>
            </div>
          </div>

          <div className="ProductSpec">
            <i className="fa-solid fa-microchip SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">CPU</p>
              <p className="SpecValue">{product.cpu}</p>
            </div>
          </div>

          <div className="ProductSpec">
            <i className="fa-solid fa-microchip SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">Number of Cores</p>
              <p className="SpecValue">{product.cores}</p>
            </div>
          </div>

          <div className="ProductSpec">
            <i className="fa-solid fa-camera SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">Main Camera</p>
              <p className="SpecValue">{product.mainCamera}</p>
            </div>
          </div>

          <div className="ProductSpec">
            <i className="fa-solid fa-camera-rotate SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">Front Camera</p>
              <p className="SpecValue">{product.frontCamera}</p>
            </div>
          </div>

          <div className="ProductSpec">
            <i className="fa-solid fa-battery-three-quarters SpecIcon"></i>
            <div className="SpecDetail">
              <p className="SpecLabel">Battery</p>
              <p className="SpecValue">{product.batteryCapacity}</p>
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
    </div>
  );
}
