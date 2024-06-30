import React, { PropsWithChildren, useEffect } from "react"
import "../../../nostyle/css/nostyle.css"
import Navbar from "./Navbar"

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
