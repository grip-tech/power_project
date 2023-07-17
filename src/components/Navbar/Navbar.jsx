import React from "react";
import "./Navbar.css";
import downArrow from "../../assets/png/down-arrow.png";
import logo from "../../assets/png/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navLogoBox">
        <a href="#">
          <img src={logo} alt="" width={80} className="navLogoImg" />
        </a>
      </div>

      <ul className="navLinks">
        <li className="navItem">
          <a href="">HOME</a>
        </li>
        <li className="navItem">
          <a href="">
            PRODUCTS <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
        <li className="navItem">
          <a href="">
            SOLUTIONS <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
        <li className="navItem">
          <a href="">
            RESOURCE <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
        <li className="navItem">
          <a href="">
            SUPPORT <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
        <li className="navItem">
          <a href="">
            ABOUT <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
        <li className="navItem">
          <a href="">
            CONTACT <img src={downArrow} width={10} alt="arrow_down" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
