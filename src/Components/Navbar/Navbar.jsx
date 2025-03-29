import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav">
        <img src="./logo_2.png" alt="Logo" />

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>
        <div className={`nav_menu ${isOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="nav_right">
          <button>
            Get Started <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
