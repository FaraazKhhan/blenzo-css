import React, { useEffect } from "react"
import "../../static/css/nostyle.css"
import Navbar from "../components/Navbar"

function Layout({ children }) {
  useEffect(() => {
    let theme = "dark";
    if (sessionStorage.getItem('theme')) {
      theme = sessionStorage.getItem('theme')
    }
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
