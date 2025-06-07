import React from "react";
import "./Products.css";
import Iphone14pro from "./Iphone14pro.png";
import AppleiPad9 from "./AppleiPad9.png";
import GalaxyBuds from "./GalaxyBuds.png";
import GalaxyZFold5 from "./GalaxyZFold5.png";
import SamsungGalaxyWatch6 from "./SamsungGalaxyWatch6.png";
import AppleAirPods from "./AppleAirPods.png";
import AppleWatchSeries9 from "./AppleWatchSeries9.png";
import Blackmagic from "./Blackmagic.png";

export default function Products() {
  return (
    <section className="Products">
      <div className="ProductFilters">
        <h4 className="TabNewArrival">New Arrival</h4>
        <h4 className="TabBestseller">Bestseller</h4>
        <h4 className="TabFeatured">Featured Products</h4>
      </div>

      <div className="ProductGrid">
        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={Iphone14pro}
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
          <img src={Blackmagic} alt="Blackmagic Pocket Cinema Camera 6k" />
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
            src={AppleAirPods}
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

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={SamsungGalaxyWatch6}
            alt="Samsung Galaxy Watch6 Classic 47mm Black"
          />
          <p className="ProductTitle">
            Samsung Galaxy Watch6 Classic 47mm Black
          </p>
          <p className="ProductPrice">$369</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={GalaxyZFold5}
            alt="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black"
          />
          <p className="ProductTitle">
            Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
          </p>
          <p className="ProductPrice">$1799</p>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img src={GalaxyBuds} alt="Galaxy Buds FE Graphite" />
          <div className="ProductInfo">
            <p className="ProductTitle">Galaxy Buds FE Graphite</p>
            <p className="ProductPrice">$99.99</p>
          </div>
          <div className="BuyButtonWrapper">
            <a className="BuyNowButton" href="/">
              Buy Now
            </a>
          </div>
        </div>

        <div className="ProductCard">
          <i class="fa-regular fa-heart Heart"></i>
          <img
            src={AppleiPad9}
            alt="Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021"
          />
          <p className="ProductTitle">
            Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
          </p>
          <p className="ProductPrice">$398</p>
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
