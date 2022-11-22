import { useState } from "react"
import ProductImage from "../ProductImage/ProductImage"
import ProductInfo from "../ProductInfo/ProductInfo"
import { ProductProvider } from "../Context/ProductProvider"
import "./product.scss"

const product = {
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

const Product = () => {
  const { images, ...productInfo } = product
  const [info, setInfo] = useState(productInfo)

  const updateStock = (itemsBuyed: number) => {
    const stockLeft = info.stock - itemsBuyed
    setInfo((prev) => ({ ...prev, stock: stockLeft }))
  }

  const contextValue = { images }

  return (
    <ProductProvider value={contextValue}>
      <section className='product'>
        <ProductImage images={images} />
        <ProductInfo info={info} updateStock={updateStock} />
      </section>
    </ProductProvider>
  )
}

export default Product
