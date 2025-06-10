import React from "react";
import GoldIphone14Pro from "./GoldIphone14Pro 1.png";
import AppleAirPods from "./AppleAirPods.png";
import AppleWatchSeries9 from "./AppleWatchSeries9.png";
import WhiteIphone14pro from "./WhiteIphone14pro.png";
import "./DiscountProducts.css";

export default function DiscountProducts() {
  return (
    <section className="DiscountProducts">
      <div className="Discount">
        <h3 className="DiscountInfo">Discount up to -50%</h3>
      </div>

      <div className="DiscountContainer">
        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={GoldIphone14Pro}
            alt="Apple iPhone 14 Pro Max 128GB Deep Purple"
          />
          <p className="ProductTitle">
            Apple iPhone 14 Pro Max 128GB Deep Purple
          </p>
          <p className="ProductPrice">$900</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={AppleAirPods}
            alt="Blackmagic Pocket Cinema Camera 6k"
            style={{ width: "160px", height: "160px" }}
          />
          <p className="ProductTitle">Blackmagic Pocket Cinema Camera 6k</p>
          <p className="ProductPrice">$2535</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={AppleWatchSeries9}
            alt="Apple Watch Series 9 GPS 41mm Starlight Aluminium "
          />
          <p className="ProductTitle">
            Apple Watch Series 9 GPS 41mm Starlight Aluminium
          </p>
          <p className="ProductPrice">$399</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            className="AirPodsMax"
            src={WhiteIphone14pro}
            alt="AirPods Max Silver Starlight Aluminium"
          />
          <p className="ProductTitle">AirPods Max Silver Starlight Aluminium</p>
          <p className="ProductPrice">$549</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
