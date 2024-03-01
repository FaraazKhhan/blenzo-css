import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ThemeContext } from '../contexts/Theme'
import Switch from './Switch'

// const getThemeIcon = (theme) => {
//   if (theme) {
//     if (theme === "dark") {
//       return "🌙"
//     } else {
//       return "☀️"
//     }
//   }
//   return "🌙"
// }

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const [themeIcon, setThemeIcon] = useState(getThemeIcon(theme))

  // useEffect(() => {
  //   setThemeIcon(theme === 'dark' ? "🌙" : "☀️");
  // }, [theme])

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
              // <Switch icon={themeIcon} onClickFunc={toggleTheme} />
              <Switch icon={themeIcon} onClickFunc={toggleTheme} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
