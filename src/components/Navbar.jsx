import { CgProfile } from "react-icons/cg";
import { FaHeart, FaArrowLeft, FaArrowRight, FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <button className="nav-arrow" aria-label="Previous">
          <FaArrowLeft />
        </button>
        <span className="navbar-title">Love Books</span>
        <button className="nav-arrow" aria-label="Next">
          <FaArrowRight />
        </button>
      </div>

      
    </header>
  );
};

export default Navbar;
