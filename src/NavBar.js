import React from "react";
import "./NavBar.css";
import CyberNavLogo from "./CyberNavLogo.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBarContainer">
        <img src={CyberNavLogo} alt="" />
        <form>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search" />
        </form>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <div className="IconNav">
          <a href="/">
            <i class="fa-regular fa-heart"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="/">
            <i class="fa-regular fa-user"></i>
          </a>
        </div>
        <i class="fa-solid fa-bars NavbarIcon"></i>
      </div>
    </div>
  );
}
