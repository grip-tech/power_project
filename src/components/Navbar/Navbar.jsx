import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">HOME</Link>
        </li>
        <li className="navItem">
          <Link to="/products">
            PRODUCTS <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/solutions">
            SOLUTIONS <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/resource">
            RESOURCE <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/support">
            SUPPORT <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/about">
            ABOUT <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact">
            CONTACT <img src={downArrow} width={10} alt="arrow_down" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
