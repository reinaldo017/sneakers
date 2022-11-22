import React from "react"
import { useState } from "react"
import Nav from "../Nav/Nav"
import Product from "../Product/Product"
import { AppProvider } from "../Context/AppProvider"
import MobileMenu from "../MobileMenu/MobileMenu"

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <AppProvider>
      <Nav toggleMenu={toggleMenu} />
      <main>
        <Product />
      </main>
      <MobileMenu visible={showMenu} toggleMenu={toggleMenu} />
    </AppProvider>
  )
}

export default App
