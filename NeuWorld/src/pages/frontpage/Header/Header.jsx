import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  // Fermer le menu si on clique ailleurs dans la page
  useEffect(() => {
    const handleClickOutside = (e) => {
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.getElementById("mobileMenu");

      if (
        hamburger &&
        mobileMenu &&
        !hamburger.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        setMenuActive(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fermer le menu si on clique sur un lien
  const closeMenuOnClick = () => setMenuActive(false);

  return (
    <>
      <div className="header">
        <div className="inner-header">

          {/* Bouton mobile */}
          <div
            className={`hamburger ${menuActive ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Logo */}
          <div className="logo_container">
            <h1>
              Neu<span>World</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <ul className="navigation">
            <Link to="/" onClick={closeMenuOnClick}><li>neuHub</li></Link>
            <Link to="/odyssey" onClick={closeMenuOnClick}><li>Odyssey</li></Link>
            <Link to="#" onClick={closeMenuOnClick}><li>Carrière</li></Link>
            <Link to="#" onClick={closeMenuOnClick}><li>Option 4</li></Link>
            <Link to="#" onClick={closeMenuOnClick}><li>Option 5</li></Link>
          </ul>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${menuActive ? "active" : ""}`} id="mobileMenu">
        <Link to="/" onClick={closeMenuOnClick}><li>neuHub</li></Link>
        <Link to="/odyssey" onClick={closeMenuOnClick}><li>Odyssey</li></Link>
        <Link to="#" onClick={closeMenuOnClick}><li>Carrière</li></Link>
        <Link to="#" onClick={closeMenuOnClick}><li>Option 4</li></Link>
        <Link to="#" onClick={closeMenuOnClick}><li>Option 5</li></Link>
      </div>
    </>
  );
}
