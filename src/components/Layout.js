import React, { useEffect } from "react"
import "../../static/css/nostyle.css"
import Navbar from "../components/Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
