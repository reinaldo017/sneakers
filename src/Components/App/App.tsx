import { useState } from "react"
import useInfo from "./useInfo.js"
import Cart from "../Cart/Cart"
import CartItem from "../CartItem/CartItem"
import Product from "../Product/Product"
import ProductInfo from "../ProductInfo/ProductInfo"
import MobileMenu from "../MobileMenu/MobileMenu"
import Nav from "../Nav/Nav"
import MobileCarousel from "../MobileCarousel/MobileCarousel"
import DesktopCarousel from "../DesktopCarousel/DesktopCarousel"
import { ItemType } from "../../types/types"
import Modal from "../Modal/Modal"

const App = () => {
  const { productInfo, linksNames, userAvatarSrc } = useInfo()
  const [product, setProduct] = useState(productInfo)
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [activeImageIndex, setCurrentImageIndex] = useState(0)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
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

    const itemIsAlreadyInCart = cartItems.some(
      cartItem => cartItem.name === item.name
    )

    if (itemIsAlreadyInCart) {
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

  const removeFromCart = (itemName: string, itemQuantity: number) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      stock: prevProduct.stock + itemQuantity,
    }))

    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName))

    if (!cartItems) {
      setShowCart(false)
    }
  }

  const totalItems = cartItems.reduce(
    (totalItems, item) => totalItems + item.quantity,
    0
  )

  const handleNextSlide = () => {
    const nextIndex = activeImageIndex + 1

    if (nextIndex > product.images.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(nextIndex)
    }
  }

  const handlePrevSlide = () => {
    const nextIndex = activeImageIndex - 1

    if (nextIndex < 0) {
      setCurrentImageIndex(product.images.length - 1)
    } else {
      setCurrentImageIndex(nextIndex)
    }
  }

  const handleSlideChange = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
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
        itemsInCart={totalItems}
        toggleMenu={toggleMenu}
        toggleCart={toggleCart}>
        <Cart visible={showCart}>
          {cartItems.map(item => (
            <CartItem
              key={item.name}
              item={item}
              removeFromCart={() => removeFromCart(item.name, item.quantity)}
            />
          ))}
        </Cart>
      </Nav>
      <main>
        <Product>
          <MobileCarousel
            images={product.images}
            activeImageIndex={activeImageIndex}
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
          />
          <DesktopCarousel
            images={product.images}
            activeImageIndex={activeImageIndex}
            handleSlideChange={handleSlideChange}
            toggleModal={toggleModal}
          />
          <ProductInfo
            product={product}
            addToCart={addToCart}
          />
        </Product>
      </main>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}>
          <DesktopCarousel
            images={product.images}
            activeImageIndex={activeImageIndex}
            handleSlideChange={() => {}}
          />
        </Modal>
      )}
    </>
  )
}

export default App
