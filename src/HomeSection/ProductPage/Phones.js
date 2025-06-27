import React from "react";
import GoldIphone14Pro from "../GoldIphone14Pro1.png";
import "./Phones.css";

export default function Phones() {
  return (
    <div className="Phones">
      <div className="ProductToolbar">
        <div className="ProductToolbarInfo">
          <p>Selected Product:</p>
          <span>85</span>
        </div>
        <div className="SelectWrapper">
          <i className="fa-solid fa-chevron-down"></i>
          <select>
            <option>By rating</option>
            <option>By price</option>
            <option>By popularity</option>
          </select>
        </div>
      </div>
      <div className="PhoneContainer">
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
      </div>
    </div>
  );
}
