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
        <div className="PopularProductCard">
          <div className="ProductImageWrapper">
            <img
              className="EarphonesImage"
              src={EarphonesBehind}
              alt="Earphones"
            />
            <img className="WatchImagee" src={WatchOnTop} alt="Watch" />
          </div>
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

        <div className="PopularProductCard">
          <div className="ProductImageWrapper">
            <img className="WatchImage" src={IpadPro} alt="Ipad Pro" />
          </div>
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

        <div className="PopularProductCard">
          <div className="ProductImageWrapper">
            <img
              className="WatchImage"
              src={SamsungGalaxy}
              alt="Samsung Galaxy "
            />
          </div>
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

        <div className="PopularProductCard">
          <div className="ProductImageWrapper">
            <img className="WatchImage" src={MacbookPro} alt="Macbook Pro" />
          </div>
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

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide BannersCarousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item ">
            <img src={EarphonesBehind} class="d-block w-100" alt="Earphones" />
            <div class="carousel-caption ">
              <h5>Fourth slide label</h5>
              <p>
                Some representative placeholder content for the fourth slide.
              </p>
            </div>
          </div>
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={IpadPro} class="d-block w-100" alt="Ipad Pro" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={SamsungGalaxy}
              class="d-block w-100"
              alt="Samsung Galaxy"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={MacbookPro} class="d-block w-100" alt="Macbook Pro" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
