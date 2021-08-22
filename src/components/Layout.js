import React, { useEffect } from "react"
import "../../../css/nostyle.css"
import Navbar from "../components/Navbar"

function Layout({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark")
  }, [])

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
