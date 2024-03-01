import React, { useEffect } from "react"
import "../../static/css/nostyle.css"
import Navbar from "../components/Navbar"
import { ThemeProvider } from '../contexts/Theme'

function Layout({ children }) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
