import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

function Navbar() {
  const [themeIcon, setThemeIcon] = useState((window.sessionStorage.getItem('theme') === "dark" ? "🌙" : "☀️") || "🌙")

  useEffect(() => {
    const theme = window.sessionStorage.getItem('theme');

    if (theme) {
      setThemeIcon(theme === 'dark' ? "🌙" : "☀️");
    }
  }, [])


  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    const doc = document.documentElement;
    if (doc.getAttribute('data-theme') === 'dark') {
      doc.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
    } else {
      doc.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-container max-width-1100">
        <h3 className="navbar-logo">
          <Link to="/">
            <span style={{ fontFamily: "Zen Dots" }}>
              <span className="text-primary">NO</span>
              <span>Style</span>
              <span className="text-gray">CSS</span>
            </span>
          </Link>
        </h3>
        <div className="navbar-menu">
          <input type="checkbox" id="navbar-menu-btn" />
          <label
            htmlFor="navbar-menu-btn"
            className="navbar-menu-label"
          ></label>
          <ul className="navbar-link-list">
            <li className="navbar-link">
              <Link to="/features">Features</Link>
            </li>
            <li className="navbar-link">
              <Link to="/docs">Docs</Link>
            </li>
            <li className="navbar-link">
              <Link to="/downloads">Downloads</Link>
            </li>
            <li className="navbar-link">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="navbar-link">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-link">
              <a onClick={handleClick}>{themeIcon}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
