import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Switch from './Switch'
import ThemeConstants from '../constants/ThemeConstants'

const getTheme = () => {
  if (typeof window !== "undefined") {
    const theme = window.localStorage.getItem("theme");
    if (!theme) {
      window.localStorage.setItem("theme", ThemeConstants.DARK);
      return ThemeConstants.DARK;
    } else {
      return theme;
    }
  }
  return ThemeConstants.DARK;
};

const getThemeIcon = (theme) => {
  const basePath = 'svg';
  if (theme === ThemeConstants.DARK) {
    return basePath + '/moon.svg';
  }
  return basePath + '/sun.svg';
};

function Navbar() {
  const [theme, setTheme] = useState(getTheme);
  const [themeIcon, setThemeIcon] = useState(getThemeIcon(theme));

  function toggleTheme() {
    if (theme === ThemeConstants.DARK) {
      setTheme(ThemeConstants.LIGHT);
    } else {
      setTheme(ThemeConstants.DARK);
    }
  };

  useEffect(() => {
    (() => {
      document.documentElement.setAttribute('data-theme', theme);
      if (typeof window !== "undefined") window.localStorage.setItem("theme", theme);
    })();
  }, [theme]);

  return (
    <header className="navbar">
      <div className="navbar-container max-width-1100">
        <h3 className="navbar-logo">
          <Link to="/">
            <span className="russo-one-regular">
              <span className="text-primary">NO</span>
              <span>Style</span>::
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
              <Switch icon={themeIcon} handler={toggleTheme} defaultChecked={theme === 'dark' ? true : false} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
