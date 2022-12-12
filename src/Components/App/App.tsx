import React from "react"
import { useState } from "react"
import useInfo from "./useInfo"
import Cart from "../Cart/Cart"
import CartItem from "../CartItem/CartItem"
import Product from "../Product/Product"
import ProductImage from "../ProductImage/ProductImage"
import ProductInfo from "../ProductInfo/ProductInfo"
import MobileMenu from "../MobileMenu/MobileMenu"
import Nav from "../Nav/Nav"

import { ItemType } from "../../types/types"

const App = () => {
  const { productInfo, linksNames, userAvatarSrc } = useInfo()
  const [product, setProduct] = useState(productInfo)
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const substractfromStock = (buyed: number) => {
    setProduct(prev => {
      const newStock = prev.stock - buyed
      return {
        ...prev,
        stock: newStock,
      }
    })
  }

  const addToCart = (item: ItemType) => {
    if (item.quantity === 0) return

    if (cartItems.some(cartItem => cartItem.name === item.name)) {
      setCartItems(prev =>
        prev.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      )
    } else {
      setCartItems(prev => [...prev, item])
    }

    substractfromStock(item.quantity)
    setShowCart(true)
  }

  const removeFromCart = (itemName: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName))
  }

  return (
    <>
      <MobileMenu
        linksNames={linksNames}
        visible={showMenu}
        toggleMenu={toggleMenu}
      />
      <Nav
        linksNames={linksNames}
        userAvatarSrc={userAvatarSrc}
        toggleMenu={toggleMenu}
        toggleCart={toggleCart}>
        <Cart visible={showCart}>
          {cartItems.map(item => (
            <CartItem
              key={item.name}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </Cart>
      </Nav>
      <main>
        <Product>
          <ProductImage images={product.images} />
          <ProductInfo
            product={product}
            addToCart={addToCart}
          />
        </Product>
      </main>
    </>
  )
}

export default App
