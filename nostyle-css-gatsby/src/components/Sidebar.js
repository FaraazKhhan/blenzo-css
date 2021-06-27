import React from "react"

function Sidebar() {
  return (
    <nav
      style={{
        height: "100vh",
        minHeight: "700px",
        width: "30%",
        maxWidth: "300px",
      }}
    >
      <h3>Docs</h3>
      <ul>
        <li>Getting started</li>
        <li>Navbar</li>
        <li>Buttons</li>
        <li>Forms</li>
        <li>Checkbox</li>
        <li>Links</li>
        <li>Icons</li>
        <li>Containers</li>
        <li>Footer</li>
      </ul>
    </nav>
  )
}

export default Sidebar
