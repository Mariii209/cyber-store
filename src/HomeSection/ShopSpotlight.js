import React from "react";
import "./ShopSpotlight.css";
import PlayStation from "./PlayStation.png";
import MacBookPro16 from "./MacBookPro16.png";
import AppleVisionPro from "./AppleVisionPro.png";
import AppleAirPods from "./AppleAirPods.png";

export default function ShopSpotlight() {
  return (
    <div className="ShopSpotlight container-fluid">
      <section className="FeaturedProductsSection">
        <div className="ProductCard PlayStation">
          <div className="ProductImage">
            <img src={PlayStation} alt="Playstation 5" className="" />
          </div>
          <div className="ProductInfo P5content">
            <h3>Playstation 5</h3>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="ProductCard AppleAirPods">
          <div className="ProductImage">
            <img src={AppleAirPods} alt="Apple AirPods Max" />
          </div>
          <div className="ProductInfo">
            <h3>
              Apple AirPods <strong>Max</strong>{" "}
            </h3>
            <p>Computational audio. Listen, it's powerful.</p>
          </div>
        </div>
        <div className="ProductCard AppleVisionPro">
          <div className="ProductImage">
            <img src={AppleVisionPro} alt="Apple Vision Pro" />
          </div>
          <div className="ProductInfo">
            <h3>
              Apple Vision <strong>Pro</strong>{" "}
            </h3>
            <p className="">An immersive way to experience entertainment.</p>
          </div>
        </div>
        <div className="ProductFeatured MacbookAir">
          <div className="MacbookInfo">
            <h3 className="Macbookh3">
              Macbook <strong>Air</strong>
            </h3>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <div className="ProductCta">
              <a href="/">Shop Now</a>
            </div>
          </div>
          <div className="ProductImageMacbook">
            <img src={MacBookPro16} alt="Macbook Air" />
          </div>
        </div>
      </section>
    </div>
  );
}
