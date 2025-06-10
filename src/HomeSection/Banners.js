import React from "react";
import "./Banners.css";
import WatchOnTop from "./WatchOnTop.png";
import EarphonesBehind from "./EarphonesBehind.png";
import IpadPro from "./IpadPro.png";
import SamsungGalaxy from "./SamsungGalaxy.png";
import MacbookPro from "./MacbookPro.png";

export default function Banners() {
  return (
    <div className="Container-fluid">
      <div className="Banners">
        <div className="PopularProductCard CradOne">
          <div className="ProductImageWrapper">
            <img
              className="EarphonesImage"
              src={EarphonesBehind}
              alt="Earphones"
            />
            <img className="WatchImagee" src={WatchOnTop} alt="Watch" />
          </div>
          <div className="ProductContent">
            <h3 className="ProductTitle">Popular Products</h3>
            <p className="ProductDescription">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="ShopNowWrapper">
              <a className="ShopNowLink" href="/">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="PopularProductCard CardTwo">
          <div className="ProductImageWrapper">
            <img className="WatchImage" src={IpadPro} alt="Ipad Pro" />
          </div>
          <div className="ProductContent">
            <h3 className="ProductTitle">Ipad Pro</h3>
            <p className="ProductDescription">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="ShopNowWrapper">
              <a className="ShopNowLink" href="/">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="PopularProductCard CardThree">
          <div className="ProductImageWrapper">
            <img
              className="WatchImage"
              src={SamsungGalaxy}
              alt="Samsung Galaxy "
            />
          </div>
          <div className="ProductContent">
            <h3 className="ProductTitle">Samsung Galaxy</h3>
            <p className="ProductDescription">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="ShopNowWrapper">
              <a className="ShopNowLink" href="/">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="PopularProductCard CardFour">
          <div className="ProductImageWrapper">
            <img className="WatchImage" src={MacbookPro} alt="Macbook Pro" />
          </div>
          <div className="ProductContent">
            <h3 className="ProductTitle">Macbook Pro</h3>
            <p className="ProductDescription">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div className="ShopNowWrapper">
              <a className="ShopNowLink" href="/">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide BannersCarousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item CarouselContainer active ">
            <div className="CarouselImages">
              <img
                src={EarphonesBehind}
                alt="Earphones"
                className="Earphones"
              />
              <img src={WatchOnTop} alt="SmartWatch" className="SmartWatch" />
            </div>
            <div className="carousel-caption ">
              <h3 className="ProductTitle">Popular Products</h3>
              <p className="ProductDescription">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <div className="ShopNowWrapper">
                <a className="ShopNowLink" href="/">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item CarouselContainer CardTwo">
            <div className="CarouselImages">
              <img src={IpadPro} class="" alt="Ipad Pro" />
            </div>
            <div className="carousel-caption ">
              <h3 className="ProductTitle">Ipad Pro</h3>
              <p className="ProductDescription">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <div className="ShopNowWrapper">
                <a className="ShopNowLink" href="/">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item CarouselContainer CardThree">
            <div className="CarouselImages">
              <img src={SamsungGalaxy} class="" alt="Samsung Galaxy" />
            </div>
            <div className="carousel-caption ">
              <h3 className="ProductTitle">Samsung Galaxy</h3>
              <p className="ProductDescription">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <div className="ShopNowWrapper">
                <a className="ShopNowLink" href="/">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item CarouselContaine CardFour">
            <div className="CarouselImages">
              <img src={MacbookPro} class="" alt="Macbook Pro" />
            </div>
            <div className="carousel-caption">
              <h3 className="ProductTitle">MacBook Pro</h3>
              <p className="ProductDescription">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <div className="ShopNowWrapper">
                <a className="ShopNowLink" href="/">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
