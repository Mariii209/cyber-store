import React from "react";
import "./Footer.css";
import LogoCyber from "./LogoCyber.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <section className="FooterAbout">
          <img src={LogoCyber} alt="" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </section>

        <section className="FooterServices">
          <h4>Services</h4>
          <ul>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </section>

        <section>
          <h4>Assistance to the buyer</h4>
          <ul>
            <li>Find an order</li>
            <li>Delivery terms</li>
            <li>Exchange and return</li>
            <li>Guarantee</li>
            <li>FAQs</li>
            <li>Terms of use</li>
          </ul>
        </section>
      </div>
      <div className="FooterSocial">
        <a href="/" aria-label="Twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="/" aria-label="Facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="/" aria-label="TikTok">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="/" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
