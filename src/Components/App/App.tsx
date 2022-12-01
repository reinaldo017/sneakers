import React from "react"
import { useState } from "react"
import Nav from "../Nav/Nav"
import Product from "../Product/Product"
import MobileMenu from "../MobileMenu/MobileMenu"
import Cart from "../Cart/Cart"
import CartItem from "../CartItem/CartItem"
import { Image } from "../../types/types"

type ProductType = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
  images: Image[]
}

const productInfo = {
  name: "Fall Limited Editon Sneakers",
  description:
    "These low-profile sneakers are your perfect casual weat companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discount: 50,
  stock: 4,
  images: [
    {
      src: "./images/image-product-1.jpg",
      alt: "white and brown sneakers with orange background",
    },
    {
      src: "./images/image-product-2.jpg",
      alt: "white and brown sneakers with white rocks and stick",
    },
    {
      src: "./images/image-product-3.jpg",
      alt: "white and brown sneakers with orange background and rocks",
    },
    {
      src: "./images/image-product-4.jpg",
      alt: "white and brown sneaker with orange background and white rocks, side view",
    },
  ],
}

const userAvatarSrc = "./images/image-avatar.png"

const linksNames = ["Collections", "Men", "Women", "About", "Contact"]

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [product, setProduct] = useState(productInfo)
  const [itemsSelected, setItemsSelected] = useState<any[]>([])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const addToCart = (product: ProductType, quantity: number) => {
    setItemsSelected((prev) => [...prev, product])
  }

  const removeFromCart = (itemName: string) => {
    setItemsSelected((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    )
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
        toggleMenu={toggleMenu}>
        <Cart>
          {itemsSelected.map((item) => (
            <CartItem
              key={item.name}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              image={item.images[0]}
              removeFromCart={removeFromCart}
            />
          ))}
        </Cart>
      </Nav>
      <main>
        <Product product={product} addToCart={addToCart} />
      </main>
    </>
  )
}

export default App
