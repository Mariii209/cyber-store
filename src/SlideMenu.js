import React, { useState } from "react";
import "./SlideMenu.css";

export default function SlideMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="SlideMenu">
      <i className="fa-solid fa-bars NavbarIcon" onClick={toggleMenu}></i>
      <div className={`SlideInfo ${menuOpen ? "open" : ""}`}>
        <div className="MobileMenuTopBar">
          <i class="fa-solid fa-xmark Xmark" onClick={toggleMenu}></i>
          <div className="MobileMenuIcons">
            <a href="/">
              <i className="fa-regular fa-heart"></i>
            </a>
            <a href="/">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <a href="/">
              <i className="fa-regular fa-user"></i>
            </a>
          </div>
        </div>
        <form className="MobileMenuSearch">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search" />
        </form>
        <ul className="MobileMenuLinks">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}
