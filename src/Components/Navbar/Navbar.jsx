import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav">
        <img src="./logo_2.png" alt="Logo" />

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        <div className={`nav_menu ${isOpen ? "open" : ""}`}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => setPage("Contact")}>Contact Us</button>
          <button onClick={() => scrollToSection("how")}>How it work</button>
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
