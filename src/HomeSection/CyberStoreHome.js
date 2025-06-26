import React from "react";
import "./CyberStoreHome.css";
import ShopSpotlight from "./ShopSpotlight";
import Category from "./Category";
import Products from "./Products";
import Banners from "./Banners";
import DiscountProducts from "./DiscountProducts";
import BannerTwo from "./BannerTwo";
import Hero from "./Hero.png";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function CyberStoreHome() {
  return (
    <div className="CyberStoreHome">
      <NavBar />
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
            <img src={Hero} alt="" className=" HeroImage" />
          </div>
        </div>
      </section>
      <ShopSpotlight />
      <Category />
      <Products />
      <Banners />
      <DiscountProducts />
      <BannerTwo />
      <Footer />
    </div>
  );
}
