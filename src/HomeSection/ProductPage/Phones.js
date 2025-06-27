import React from "react";
import GoldIphone14Pro from "../GoldIphone14Pro1.png";
import "./Phones.css";

export default function Phones() {
  return (
    <div className="Phones">
      <div className="ProductToolbar">
        <div className="ProductToolbarInfo">
          <p>Selected Product:</p>
          <p>85</p>
        </div>
        <select id="sort" name="sort">
          <option value="rating">By rating</option>
          <option value="price">By price</option>
          <option value="popularity">By popularity</option>
        </select>
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
