import React from "react";

export default function NavBar() {
  return (
    <div className="Navbar">
      <div className="NarbarContainer">
        <img src="" alt="" />
        <form>
          <input type="search" />
        </form>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <div>
          <a href="">
            <i class="fa-regular fa-heart"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
