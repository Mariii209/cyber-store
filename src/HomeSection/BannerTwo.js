import React from "react";
import "./BannerTwo.css";

export default function BannerTwo() {
  return (
    <div className="BannerTwo">
      <div className="BannerContainer">
        <h2 className="Title">
          Big Summer <strong>Sale</strong>{" "}
        </h2>
        <p className="Subtitle">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <div className="CtaContainer">
          <a href="/" className="Cta">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
