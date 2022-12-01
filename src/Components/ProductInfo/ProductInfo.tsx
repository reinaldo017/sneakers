import { useState } from "react"
import ProductInfoUI from "./ProductInfoUI"
import { Image } from "../../types/types"

type ProductType = {
  name: string
  description: string
  price: number
  discount: number
  stock: number
  images: Image[]
}

type ProductInfoProps = {
  product: ProductType
  addToCart: (product: ProductType, quantity: number) => void
}

const ProductInfo = ({ product, addToCart }: ProductInfoProps) => {
  const [itemsSelected, setItemsSelected] = useState(1)

  const addItem = () => {
    setItemsSelected((prev) => (prev + 1 > product.stock ? prev : prev + 1))
  }

  const removeItem = () => {
    setItemsSelected((prev) => (prev - 1 < 0 ? prev : prev - 1))
  }

  const finalPrice = product.discount
    ? ((100 - product.discount) / 100) * product.price
    : product.price

  return (
    <ProductInfoUI
      product={product}
      itemsSelected={itemsSelected}
      addToCart={addToCart}
      addItem={addItem}
      removeItem={removeItem}
      finalPrice={finalPrice}
    />
  )
}

export default ProductInfo
