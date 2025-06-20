import React from "react";
import "./NavBar.css";
import CyberNavLogo from "./CyberNavLogo.png";
import SlideMenu from "./SlideMenu";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBarContainer">
        <img src={CyberNavLogo} alt="" />
        <form className="NavBarSearch">
          <i class="fa-solid fa-magnifying-glass SearchIcon"></i>
          <input type="search" className="SearchInput" placeholder="Search" />
        </form>
        <ul className="NavLinks">
          <li className="NavItem">Home</li>
          <li className="NavItem">About</li>
          <li className="NavItem">Contact Us</li>
          <li className="NavItem">Blog</li>
        </ul>

        <div className="IconNav">
          <a href="/">
            <i className="fa-regular fa-heart FavoriteIcon"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-cart-shopping CartIcon"></i>
          </a>
          <a href="/">
            <i className="fa-regular fa-user UserIcon"></i>
          </a>
        </div>
        <SlideMenu />
      </div>
    </div>
  );
}
