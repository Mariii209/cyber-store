import React from "react";
import "./CyberStoreHome.css";
import IphoneImage from "./IphoneImage.png";

export default function CyberStoreHome() {
  return (
    <div className="CyberStoreHome">
      <section className="HeroSection container-fluid ">
        <div className="row align-items-center">
          <div className="col-lg-8 HeroTextContent ">
            <p className="HeroTagline">Pro.Beyond.</p>
            <h1 className="HeroTitle">
              IPHONE 14 <p>PRO</p>
            </h1>
            <p className="HeroDescription">
              Created to change everything for the better. For everyone
            </p>
            <div className="HeroButtonContainer">
              <a href="/" className="HeroButton">
                Shop Now
              </a>
            </div>
          </div>
          <div className="col-lg-4  HeroImageContainer">
            <img src={IphoneImage} alt="" className=" HeroImage" />
          </div>
        </div>
      </section>
      <section>Section 2</section>
      <section>Section 3</section>
      <section>Section 4</section>
      <section>Section 5</section>
      <section>Section 6</section>
    </div>
  );
}
