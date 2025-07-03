import React from "react";

export default function ProductDetailCard({ product }) {
  return (
    <div className="ProductDetailCard">
      <img src={product.image} alt={product.name} />
      <h1>Apple iPhone 14 Pro Max</h1>
      <h4>$1399</h4>
      <h5>$1499</h5>
      <p>Select color :</p>
      <div className="ColorOptions">
        <div
          className="ColorOption"
          style={{ backgroundColor: "#000000" }}
        ></div>
        <div
          className="ColorOption"
          style={{ backgroundColor: "#FFFFFF" }}
        ></div>
        <div
          className="ColorOption"
          style={{ backgroundColor: "#FF0000" }}
        ></div>
        <div>
          <i class="fa-solid fa-mobile-screen-button"></i>
          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-microchip"></i>
          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <div>
          <i class="fas fa-microchip"></i>

          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-camera"></i>
          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-camera-rotate"></i>
          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-battery-three-quarters"></i>
          <div>
            <p>Screen size</p>
            <p>6.7"</p>
          </div>
        </div>
        <p>
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
          more...
        </p>

        <button>Add to Wishlist</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
