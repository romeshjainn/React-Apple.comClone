import React from "react";
import appleLogo from "./assets/apple-logo.svg";
import searchCart from "./assets/cart.svg";
import searchLogo from "./assets/search.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <img src={appleLogo} alt="not available" />
        </li>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Vision</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>
          <img src={searchCart} alt="" />
        </li>
        <li>
          <img src={searchLogo} alt="" />
        </li>
      </ul>
    </header>
  );
};
